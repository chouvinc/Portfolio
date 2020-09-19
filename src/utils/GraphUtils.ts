import * as d3 from 'd3';

type NodePos = {
    x: number
    y: number
}

export default abstract class GraphUtils {
    public static buildGraphInTag(tag: string, numNodes: number): void {
        // TODO:
        // 1) <DONE> Generate random collection of dots, ideally equidistance from each other 
        // 2) Connect the dots with edges
        // 3) Call generation function every 3s
        // 4) Add animations to fade in the dots
        // 5) Make animations start from the middle-most dot
        // 6) Add animations to fade out the dots
        // 7) Make animations start fading out from the outer-most dots
        
        const vis = d3.select(`#${tag}`)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("padding", "0 20px");

        const boundingRect = vis.node()?.getBoundingClientRect();

        if (!boundingRect || !boundingRect.height || !boundingRect.width) {
            throw new Error("Bounding element cannot be undefined width or height!");
        }
        const nodes: Array<NodePos> = this.buildNodeCoordinatesWithinBounds(numNodes, 10, boundingRect.width, boundingRect.height);

        vis.selectAll("circle .nodes")
            .data(nodes)
            .enter()
            .append("svg:circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", "10px")
            .attr("fill", "black");
    }

    public static buildNodeCoordinatesWithinBounds(numCoords: number, nodeRadius: number, xMax: number, yMax: number): Array<NodePos> {
        const nodePositions: Array<NodePos> = [];
        const usedPositions: Set<NodePos> = new Set<NodePos>();

        while (nodePositions.length < numCoords) {
            const nodePosition = {
                x: GraphUtils.getRandomBetween(nodeRadius, xMax - nodeRadius),
                y: GraphUtils.getRandomBetween(nodeRadius, yMax - nodeRadius)
            };

            let usedOverlaps: boolean = false;
            usedPositions.forEach(usedNodePosition => {
                usedOverlaps = usedOverlaps || this.isOverlap(usedNodePosition, nodePosition, nodeRadius);
            });

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
        return Math.pow((pos1.x - pos2.x), 2) + Math.pow((pos1.y - pos2.y), 2) <= nodeRadius;
    }
}