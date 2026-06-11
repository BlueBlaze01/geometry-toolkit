const rectangle = {
    Rectangle: {

        Area: {
            formula: "A = lw",
            inputs: ["Length", "Width"],

            calculate(length, width) {

                return {
                    valuesUsed:
                        `Length = ${length}<br>Width = ${width}`,

                    substitution:
                        `${length} × ${width}`,

                    answer:
                        (length * width).toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 2(l+w)",
            inputs: ["Length", "Width"],

            calculate(length, width) {

                return {
                    valuesUsed:
                        `Length = ${length}<br>Width = ${width}`,

                    substitution:
                        `2 × (${length} + ${width})`,

                    answer:
                        (2 * (length + width)).toFixed(2)
                };
            }
        },

        Diagonal: {
            formula: "D = √(l²+w²)",
            inputs: ["Length", "Width"],

            calculate(length, width) {

                return {
                    valuesUsed:
                        `Length = ${length}<br>Width = ${width}`,

                    substitution:
                        `√(${length}² + ${width}²)`,

                    answer:
                        Math.sqrt(
                            length * length +
                            width * width
                        ).toFixed(2)
                };
            }
        },

        LengthFromArea: {
            formula: "l = A/w",
            inputs: ["Area", "Width"],

            calculate(area, width) {

                return {
                    valuesUsed:
                        `Area = ${area}<br>Width = ${width}`,

                    substitution:
                        `${area} ÷ ${width}`,

                    answer:
                        (area / width).toFixed(2)
                };
            }
        },

        WidthFromArea: {
            formula: "w = A/l",
            inputs: ["Area", "Length"],

            calculate(area, length) {

                return {
                    valuesUsed:
                        `Area = ${area}<br>Length = ${length}`,

                    substitution:
                        `${area} ÷ ${length}`,

                    answer:
                        (area / length).toFixed(2)
                };
            }
        },

        AreaFromDiagonalAndWidth: {
            formula: "A = w√(D²-w²)",
            inputs: ["Diagonal", "Width"],

            calculate(diagonal, width) {

                const length =
                    Math.sqrt(
                        diagonal * diagonal -
                        width * width
                    );

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}<br>Width = ${width}`,

                    substitution:
                        `${width} × √(${diagonal}² - ${width}²)`,

                    answer:
                        (length * width).toFixed(2)
                };
            }
        },

        AreaFromDiagonalAndLength: {
            formula: "A = l√(D²-l²)",
            inputs: ["Diagonal", "Length"],

            calculate(diagonal, length) {

                const width =
                    Math.sqrt(
                        diagonal * diagonal -
                        length * length
                    );

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}<br>Length = ${length}`,

                    substitution:
                        `${length} × √(${diagonal}² - ${length}²)`,

                    answer:
                        (length * width).toFixed(2)
                };
            }
        },

        LengthFromPerimeter: {
            formula: "l = (P/2)-w",
            inputs: ["Perimeter", "Width"],

            calculate(perimeter, width) {

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Width = ${width}`,

                    substitution:
                        `(${perimeter}/2) - ${width}`,

                    answer:
                        ((perimeter / 2) - width).toFixed(2)
                };
            }
        },

        WidthFromPerimeter: {
            formula: "w = (P/2)-l",
            inputs: ["Perimeter", "Length"],

            calculate(perimeter, length) {

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Length = ${length}`,

                    substitution:
                        `(${perimeter}/2) - ${length}`,

                    answer:
                        ((perimeter / 2) - length).toFixed(2)
                };
            }
        },

        LengthFromDiagonal: {
            formula: "l = √(D²-w²)",
            inputs: ["Diagonal", "Width"],

            calculate(diagonal, width) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}<br>Width = ${width}`,

                    substitution:
                        `√(${diagonal}² - ${width}²)`,

                    answer:
                        Math.sqrt(
                            diagonal * diagonal -
                            width * width
                        ).toFixed(2)
                };
            }
        },

        WidthFromDiagonal: {
            formula: "w = √(D²-l²)",
            inputs: ["Diagonal", "Length"],

            calculate(diagonal, length) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}<br>Length = ${length}`,

                    substitution:
                        `√(${diagonal}² - ${length}²)`,

                    answer:
                        Math.sqrt(
                            diagonal * diagonal -
                            length * length
                        ).toFixed(2)
                };
            }
        },

        AspectRatio: {
            formula: "AR = l:w",
            inputs: ["Length", "Width"],

            calculate(length, width) {

                return {
                    valuesUsed:
                        `Length = ${length}<br>Width = ${width}`,

                    substitution:
                        `${length}:${width}`,

                    answer:
                        `${length}:${width}`
                };
            }
        },

        PerimeterFromAreaAndWidth: {
            formula: "P = 2((A/w)+w)",
            inputs: ["Area", "Width"],

            calculate(area, width) {

                const length =
                    area / width;

                const perimeter =
                    2 * (length + width);

                return {
                    valuesUsed:
                        `Area = ${area}<br>Width = ${width}`,

                    substitution:
                        `2 × ((${area}/${width}) + ${width})`,

                    answer:
                        perimeter.toFixed(2)
                };
            }
        },

        PerimeterFromAreaAndLength: {
            formula: "P = 2(l+(A/l))",
            inputs: ["Area", "Length"],

            calculate(area, length) {

                const width =
                    area / length;

                const perimeter =
                    2 * (length + width);

                return {
                    valuesUsed:
                        `Area = ${area}<br>Length = ${length}`,

                    substitution:
                        `2 × (${length} + (${area}/${length}))`,

                    answer:
                        perimeter.toFixed(2)
                };
            }
        },

        DiagonalFromAreaAndWidth: {
            formula: "D = √((A/w)²+w²)",
            inputs: ["Area", "Width"],

            calculate(area, width) {

                const length =
                    area / width;

                const diagonal =
                    Math.sqrt(
                        length * length +
                        width * width
                    );

                return {
                    valuesUsed:
                        `Area = ${area}<br>Width = ${width}`,

                    substitution:
                        `√((${area}/${width})² + ${width}²)`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        },

        DiagonalFromAreaAndLength: {
            formula: "D = √(l²+(A/l)²)",
            inputs: ["Area", "Length"],

            calculate(area, length) {

                const width =
                    area / length;

                const diagonal =
                    Math.sqrt(
                        length * length +
                        width * width
                    );

                return {
                    valuesUsed:
                        `Area = ${area}<br>Length = ${length}`,

                    substitution:
                        `√(${length}² + (${area}/${length})²)`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        },

        AreaFromPerimeterAndWidth: {
            formula: "A = w((P/2)-w)",
            inputs: ["Perimeter", "Width"],

            calculate(perimeter, width) {

                const length =
                    (perimeter / 2) - width;

                const area =
                    length * width;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Width = ${width}`,

                    substitution:
                        `${width} × ((${perimeter}/2)-${width})`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        AreaFromPerimeterAndLength: {
            formula: "A = l((P/2)-l)",
            inputs: ["Perimeter", "Length"],

            calculate(perimeter, length) {

                const width =
                    (perimeter / 2) - length;

                const area =
                    length * width;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Length = ${length}`,

                    substitution:
                        `${length} × ((${perimeter}/2)-${length})`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = D/2",
            inputs: ["Diagonal"],

            calculate(diagonal) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}`,

                    substitution:
                        `${diagonal} ÷ 2`,

                    answer:
                        (diagonal / 2).toFixed(2)
                };
            }
        }
    }
};