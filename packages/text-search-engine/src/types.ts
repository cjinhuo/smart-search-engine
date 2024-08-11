export type Matrix = [number, number][]

export interface SourceMappingData {
	pinyinString: string
	boundary: Matrix
	originalIndices: number[]
	originalLength: number
}

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface SearchOption {
	// will support in next version
	// strictCase?: boolean
}

export interface SearchOptionWithPinyin extends SearchOption {
	// pass in pinyin map by user
	pinyinMap: Record<string, string[]>
}
