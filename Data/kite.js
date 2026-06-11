const kite = {
    Kite: {

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
            formula: "P = 2(a + b)",
            inputs: ["Side A", "Side B"],

            calculate(a, b) {

                const answer =
                    2 * (a + b);

                return {
                    valuesUsed:
                        `Side A = ${a}<br>Side B = ${b}`,

                    substitution:
                        `2 × (${a} + ${b})`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        LongDiagonal: {
            formula: "d₁ = (2A) / d₂",
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

        ShortDiagonal: {
            formula: "d₂ = (2A) / d₁",
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

        AreaFromDiagonals: {
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
        }
    }
};