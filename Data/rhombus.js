const rhombus = {
    Rhombus: {

        Area: {
            formula: "A = (d₁ × d₂) / 2",
            inputs: ["Diagonal 1", "Diagonal 2"],

            calculate(d1, d2) {

                const answer =
                    (d1 * d2) / 2;

                return {
                    valuesUsed:
                        `Diagonal 1 = ${d1}<br>Diagonal 2 = ${d2}`,

                    substitution:
                        `(${d1} × ${d2}) ÷ 2`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 4s",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    4 * side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `4 × ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        SideLength: {
            formula: "s = √((d₁/2)² + (d₂/2)²)",
            inputs: ["Diagonal 1", "Diagonal 2"],

            calculate(d1, d2) {

                const answer =
                    Math.sqrt(
                        Math.pow(d1 / 2, 2) +
                        Math.pow(d2 / 2, 2)
                    );

                return {
                    valuesUsed:
                        `Diagonal 1 = ${d1}<br>Diagonal 2 = ${d2}`,

                    substitution:
                        `√((${d1}/2)² + (${d2}/2)²)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Height: {
            formula: "h = A / s",
            inputs: ["Area", "Side Length"],

            calculate(area, side) {

                const answer =
                    area / side;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Side Length = ${side}`,

                    substitution:
                        `${area} ÷ ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        AreaFromBaseHeight: {
            formula: "A = bh",
            inputs: ["Base", "Height"],

            calculate(base, height) {

                const answer =
                    base * height;

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

        SideFromPerimeter: {
            formula: "s = P/4",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                const answer =
                    perimeter / 4;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}`,

                    substitution:
                        `${perimeter} ÷ 4`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        PerimeterFromDiagonals: {
            formula: "P = 4√((d₁/2)² + (d₂/2)²)",
            inputs: ["Diagonal 1", "Diagonal 2"],

            calculate(d1, d2) {

                const side =
                    Math.sqrt(
                        Math.pow(d1 / 2, 2) +
                        Math.pow(d2 / 2, 2)
                    );

                return {
                    valuesUsed:
                        `Diagonal 1 = ${d1}<br>Diagonal 2 = ${d2}`,

                    substitution:
                        `4 × √((${d1}/2)² + (${d2}/2)²)`,

                    answer:
                        (4 * side).toFixed(2)
                };
            }
        },

        Diagonal2FromArea: {
            formula: "d₂ = 2A/d₁",
            inputs: ["Area", "Diagonal 1"],

            calculate(area, d1) {

                const answer =
                    (2 * area) / d1;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Diagonal 1 = ${d1}`,

                    substitution:
                        `(2 × ${area}) ÷ ${d1}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Diagonal1FromArea: {
            formula: "d₁ = 2A/d₂",
            inputs: ["Area", "Diagonal 2"],

            calculate(area, d2) {

                const answer =
                    (2 * area) / d2;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Diagonal 2 = ${d2}`,

                    substitution:
                        `(2 × ${area}) ÷ ${d2}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        HeightFromDiagonals: {
            formula: "h = A/s",
            inputs: ["Diagonal 1", "Diagonal 2"],

            calculate(d1, d2) {

                const area =
                    (d1 * d2) / 2;

                const side =
                    Math.sqrt(
                        Math.pow(d1 / 2, 2) +
                        Math.pow(d2 / 2, 2)
                    );

                const height =
                    area / side;

                return {
                    valuesUsed:
                        `Diagonal 1 = ${d1}<br>Diagonal 2 = ${d2}`,

                    substitution:
                        `A ÷ s`,

                    answer:
                        height.toFixed(2)
                };
            }
        },

        AreaFromSideHeight: {
            formula: "A = sh",
            inputs: ["Side Length", "Height"],

            calculate(side, height) {

                const area =
                    side * height;

                return {
                    valuesUsed:
                        `Side Length = ${side}<br>Height = ${height}`,

                    substitution:
                        `${side} × ${height}`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        InteriorAngle: {
            formula: "θ = arcsin(h/s)",
            inputs: ["Height", "Side Length"],

            calculate(height, side) {

                const angle =
                    Math.asin(
                        height / side
                    ) *
                    180 /
                    Math.PI;

                return {
                    valuesUsed:
                        `Height = ${height}<br>Side Length = ${side}`,

                    substitution:
                        `arcsin(${height}/${side})`,

                    answer:
                        angle.toFixed(2) + "°"
                };
            }
        },

        ExteriorAngle: {
            formula: "180° - θ",
            inputs: ["Interior Angle"],

            calculate(angle) {

                return {
                    valuesUsed:
                        `Interior Angle = ${angle}°`,

                    substitution:
                        `180 - ${angle}`,

                    answer:
                        (180 - angle).toFixed(2) + "°"
                };
            }
        }
    }
};