const trapezium = {
    Trapezium: {

        Area: {
            formula: "A = ((a + b) × h) / 2",
            inputs: ["Top Base", "Bottom Base", "Height"],

            calculate(topBase, bottomBase, height) {

                const answer =
                    ((topBase + bottomBase) * height) / 2;

                return {
                    valuesUsed:
                        `Top Base = ${topBase}<br>Bottom Base = ${bottomBase}<br>Height = ${height}`,

                    substitution:
                        `((${topBase} + ${bottomBase}) × ${height}) ÷ 2`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = a + b + c + d",
            inputs: [
                "Top Base",
                "Bottom Base",
                "Side 1",
                "Side 2"
            ],

            calculate(topBase, bottomBase, side1, side2) {

                const answer =
                    topBase +
                    bottomBase +
                    side1 +
                    side2;

                return {
                    valuesUsed:
                        `Top Base = ${topBase}<br>Bottom Base = ${bottomBase}<br>Side 1 = ${side1}<br>Side 2 = ${side2}`,

                    substitution:
                        `${topBase} + ${bottomBase} + ${side1} + ${side2}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Height: {
            formula: "h = (2A) / (a + b)",
            inputs: ["Area", "Top Base", "Bottom Base"],

            calculate(area, topBase, bottomBase) {

                const answer =
                    (2 * area) /
                    (topBase + bottomBase);

                return {
                    valuesUsed:
                        `Area = ${area}<br>Top Base = ${topBase}<br>Bottom Base = ${bottomBase}`,

                    substitution:
                        `(2 × ${area}) ÷ (${topBase} + ${bottomBase})`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Midline: {
            formula: "M = (a + b) / 2",
            inputs: ["Top Base", "Bottom Base"],

            calculate(topBase, bottomBase) {

                const answer =
                    (topBase + bottomBase) / 2;

                return {
                    valuesUsed:
                        `Top Base = ${topBase}<br>Bottom Base = ${bottomBase}`,

                    substitution:
                        `(${topBase} + ${bottomBase}) ÷ 2`,

                    answer:
                        answer.toFixed(2)
                };
            }
        }
    }
};
