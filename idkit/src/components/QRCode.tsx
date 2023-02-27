import QRCodeUtil from 'qrcode'
import { memo, useMemo } from 'react'
import type { ReactElement } from 'react'

const generateMatrix = (data: string): Array<number[]> => {
	const arr = QRCodeUtil.create(data, { errorCorrectionLevel: 'M' }).modules.data
	const sqrt = Math.sqrt(arr.length)

	return arr.reduce((rows, key, index) => {
		if (index % sqrt === 0) rows.push([key])
		else rows[rows.length - 1].push(key)

		return rows
	}, [] as Array<number[]>)
}

type Props = {
	data: string
	size?: number
}

const Qrcode = ({ data, size = 300 }: Props) => {
	const dots = useMemo(() => {
		const dots: ReactElement[] = []
		const matrix = generateMatrix(data)
		const cellSize = size / matrix.length
		const qrList = [
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 },
		]

		qrList.forEach(({ x, y }) => {
			const x1 = (matrix.length - 7) * cellSize * x
			const y1 = (matrix.length - 7) * cellSize * y

			for (let i = 0; i < 3; i++) {
				dots.push(
					<rect
						fill="currentColor"
						x={x1 + cellSize * i}
						y={y1 + cellSize * i}
						key={`${i}-${x}-${y}`}
						width={cellSize * (7 - i * 2)}
						height={cellSize * (7 - i * 2)}
						rx={(i - 2) * -5 + (i === 0 ? 2 : 0)} // calculated border radius for corner squares
						ry={(i - 2) * -5 + (i === 0 ? 2 : 0)} // calculated border radius for corner squares
						className={i % 2 !== 0 ? 'text-white dark:text-black' : 'text-black dark:text-white'}
					/>
				)
			}
		})

		const matrixMiddleStart = matrix.length / 2
		const matrixMiddleEnd = matrix.length / 2 - 1

		matrix.forEach((row, i) => {
			row.forEach((_, j) => {
				if (!matrix[i][j]) return
				if ((i < 7 && j < 7) || (i > matrix.length - 8 && j < 7) || (i < 7 && j > matrix.length - 8)) return
				if (i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd) return

				dots.push(
					<circle
						fill="currentColor"
						r={cellSize / 3}
						key={`circle-${i}-${j}`}
						cx={i * cellSize + cellSize / 2}
						cy={j * cellSize + cellSize / 2}
						className="text-black dark:text-white"
					/>
				)
			})
		})

		return dots
	}, [size, data])

	return (
		<div className="dark:bg-0d151d relative w-max rounded-lg bg-white" style={{ height: size, width: size }}>
			<svg height={size} width={size}>
				{dots}
			</svg>
		</div>
	)
}

export default memo(Qrcode)
