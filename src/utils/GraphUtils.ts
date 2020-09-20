import * as d3 from 'd3';

type NodePos = {
    x: number
    y: number
}

export default abstract class GraphUtils {
    public static buildGraphInTag(tag: string, numNodes: number): void {
        // TODO:
        // 1) <DONE> Generate random collection of dots, ideally equidistance from each other 
        // 2) <DONE> Connect the dots with edges
        // 3) Call generation function every 3s
        // 4) <DONE> Add animations to fade in the dots
        // 5) Make animations start from the middle-most dot
        // 6) Add animations to fade out the dots
        // 7) Make animations start fading out from the outer-most dots
        const nodeSize = 10;
        
        const vis = d3.select(`#${tag}`)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")

        const boundingRect = vis.node()?.getBoundingClientRect();

        if (!boundingRect || !boundingRect.height || !boundingRect.width) {
            throw new Error("Bounding element cannot be undefined width or height!");
        }
        
        // This might be bad practice, but the typing from d3.Selection is a bit confusing for me ATM
        const buildGraph: Function = (nodeData: Array<NodePos>, edgeData: Array<Array<NodePos>>) => {
            const nodeSelection = vis.selectAll("circle")
                .data(nodeData);

            nodeSelection
                .enter()
                    .append("svg:circle")
                .merge(nodeSelection)
                    .attr("cx", d => { return d.x; })
                    .attr("cy", d => { return d.y; })
                    .attr("r", 0)
                    .transition()
                    .attr("r", nodeSize)
                    .attr("fill", "black");
            
            nodeSelection.exit()
                .transition()
                .duration(500)
                .attr("r", 0)
                .remove();
            
            const edgeSelection = vis.selectAll("line")
                .data(edgeData);
    
            edgeSelection
                .enter()
                    .append("svg:line")
                .merge(edgeSelection)
                    .attr("x1", d => { return d[0].x; })
                    .attr("y1", d => { return d[0].y; })
                    .attr("x2", d => { return d[1].x; })
                    .attr("y2", d => { return d[1].y; })
                    .transition()
                    .duration(1000)
                    .attr("stroke", "none")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1);
            
            edgeSelection.exit()
                .transition()
                .duration(500)
                .attr("stroke-width", 0)
                .remove();
        }

        let nodes: Array<NodePos> = this.buildNodeCoordinatesWithinBounds(numNodes, nodeSize, boundingRect.width, boundingRect.height);
        let edges: Array<Array<NodePos>> = nodes.flatMap((node, index) => {
            return this.getRandomBetween(0, 3) > 2 ? nodes.slice(index + 1).map(nodePair => [node, nodePair]): [];
        });
        buildGraph(nodes, edges);

        let flag: boolean = false;
        setInterval(() => {
            if (flag) {
                nodes = this.buildNodeCoordinatesWithinBounds(numNodes, nodeSize, boundingRect.width, boundingRect.height);
                edges = nodes.flatMap((node, index) => {
                    return this.getRandomBetween(0, 3) > 2 ? nodes.slice(index + 1).map(nodePair => [node, nodePair]): [];
                });
                buildGraph(nodes, edges);
            } else {
                buildGraph([], []);
            }
            flag = !flag;
        }, 1500);
    }

    private static buildNodeCoordinatesWithinBounds(numCoords: number, nodeRadius: number, xMax: number, yMax: number): Array<NodePos> {
        const nodePositions: Array<NodePos> = [];
        const usedPositions: Set<NodePos> = new Set<NodePos>();

        while (nodePositions.length < numCoords) {
            const nodePosition = {
                x: GraphUtils.getRandomBetween(nodeRadius, xMax - nodeRadius),
                y: GraphUtils.getRandomBetween(nodeRadius, yMax - nodeRadius)
            };

            let usedOverlaps: boolean = Array.from(usedPositions).some(usedNodePosition => this.isOverlap(usedNodePosition, nodePosition, nodeRadius));

            if (!usedPositions.has(nodePosition) && !usedOverlaps) {
                nodePositions.push(nodePosition);
                usedPositions.add(nodePosition);
            }
        }

        return nodePositions;
    }

    private static getRandomBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    private static isOverlap(pos1: NodePos, pos2: NodePos, nodeRadius: number): boolean {
        // to check if two circles of some radius nodeRadius overlap, simply calculate distance
        // and check if <= nodeRadius
        return Math.sqrt(Math.pow((pos1.x - pos2.x), 2) + Math.pow((pos1.y - pos2.y), 2)) <= 2 * nodeRadius;
    }
}