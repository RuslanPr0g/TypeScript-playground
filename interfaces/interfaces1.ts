interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number,
        height: number
    }
}

const react1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: "#000"
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 50,
        height: 50
    },
    color: "#ccc"
}

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// =====================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: "#000",
    getArea: (): number {
        return this.size.width * this.size.height
    }
}

// ===================

