const parallelogram = {
    Parallelogram: {

        Area: {
            formula: "A = bh",
            inputs: ["Base", "Height"],

            calculate(base, height) {

                const answer = base * height;

                return {
                    valuesUsed:
                        `Base = ${base}<br>Height = ${height}`,

                    substitution:
                        `${base} × ${height}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 2(b+s)",
            inputs: ["Base", "Side Length"],

            calculate(base, side) {

                const answer =
                    2 * (base + side);

                return {
                    valuesUsed:
                        `Base = ${base}<br>Side Length = ${side}`,

                    substitution:
                        `2 × (${base} + ${side})`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        BaseFromArea: {
            formula: "b = A/h",
            inputs: ["Area", "Height"],

            calculate(area, height) {

                const base =
                    area / height;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Height = ${height}`,

                    substitution:
                        `${area} ÷ ${height}`,

                    answer:
                        base.toFixed(2)
                };
            }
        },

        HeightFromArea: {
            formula: "h = A/b",
            inputs: ["Area", "Base"],

            calculate(area, base) {

                const height =
                    area / base;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Base = ${base}`,

                    substitution:
                        `${area} ÷ ${base}`,

                    answer:
                        height.toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = (P/2)-b",
            inputs: ["Perimeter", "Base"],

            calculate(perimeter, base) {

                const side =
                    (perimeter / 2) - base;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Base = ${base}`,

                    substitution:
                        `(${perimeter}/2)-${base}`,

                    answer:
                        side.toFixed(2)
                };
            }
        },

        BaseFromPerimeter: {
            formula: "b = (P/2)-s",
            inputs: ["Perimeter", "Side Length"],

            calculate(perimeter, side) {

                const base =
                    (perimeter / 2) - side;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Side Length = ${side}`,

                    substitution:
                        `(${perimeter}/2)-${side}`,

                    answer:
                        base.toFixed(2)
                };
            }
        },

        AreaFromAngle: {
            formula: "A = bs sinθ",
            inputs: ["Base", "Side Length", "Angle"],

            calculate(base, side, angle) {

                const radians =
                    angle * Math.PI / 180;

                const area =
                    base *
                    side *
                    Math.sin(radians);

                return {
                    valuesUsed:
                        `Base = ${base}<br>Side Length = ${side}<br>Angle = ${angle}°`,

                    substitution:
                        `${base} × ${side} × sin(${angle})`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        HeightFromAngle: {
            formula: "h = s sinθ",
            inputs: ["Side Length", "Angle"],

            calculate(side, angle) {

                const radians =
                    angle * Math.PI / 180;

                const height =
                    side *
                    Math.sin(radians);

                return {
                    valuesUsed:
                        `Side Length = ${side}<br>Angle = ${angle}°`,

                    substitution:
                        `${side} × sin(${angle})`,

                    answer:
                        height.toFixed(2)
                };
            }
        },

        Diagonal1: {
            formula: "√(b²+s²+2bs cosθ)",
            inputs: ["Base", "Side Length", "Angle"],

            calculate(base, side, angle) {

                const radians =
                    angle * Math.PI / 180;

                const diagonal =
                    Math.sqrt(
                        base * base +
                        side * side +
                        2 *
                        base *
                        side *
                        Math.cos(radians)
                    );

                return {
                    valuesUsed:
                        `Base = ${base}<br>Side Length = ${side}<br>Angle = ${angle}°`,

                    substitution:
                        `√(${base}² + ${side}² + 2 × ${base} × ${side} × cos(${angle}))`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        },

        Diagonal2: {
            formula: "√(b²+s²−2bs cosθ)",
            inputs: ["Base", "Side Length", "Angle"],

            calculate(base, side, angle) {

                const radians =
                    angle * Math.PI / 180;

                const diagonal =
                    Math.sqrt(
                        base * base +
                        side * side -
                        2 *
                        base *
                        side *
                        Math.cos(radians)
                    );

                return {
                    valuesUsed:
                        `Base = ${base}<br>Side Length = ${side}<br>Angle = ${angle}°`,

                    substitution:
                        `√(${base}² + ${side}² − 2 × ${base} × ${side} × cos(${angle}))`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        }
    }
};
