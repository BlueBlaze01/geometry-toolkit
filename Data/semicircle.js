const semicircle = {
    Semicircle: {

        Area: {
            formula: "A = (πr²)/2",
            inputs: ["Radius"],

            calculate(radius) {

                const answer =
                    (Math.PI *
                        radius *
                        radius) / 2;

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `(π × ${radius}²) ÷ 2`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = πr + 2r",
            inputs: ["Radius"],

            calculate(radius) {

                const answer =
                    (Math.PI * radius) +
                    (2 * radius);

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `π × ${radius} + 2 × ${radius}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        ArcLength: {
            formula: "πr",
            inputs: ["Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `π × ${radius}`,

                    answer:
                        (Math.PI * radius).toFixed(2)
                };
            }
        },

        Diameter: {
            formula: "2r",
            inputs: ["Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `2 × ${radius}`,

                    answer:
                        (2 * radius).toFixed(2)
                };
            }
        },

        RadiusFromArea: {
            formula: "√(2A/π)",
            inputs: ["Area"],

            calculate(area) {

                const radius =
                    Math.sqrt(
                        (2 * area) /
                        Math.PI
                    );

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√((2×${area})/π)`,

                    answer:
                        radius.toFixed(2)
                };
            }
        },
    }
};