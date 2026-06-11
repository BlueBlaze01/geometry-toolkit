const annulus = {
    Annulus: {

        Area: {
            formula: "A = π(R² - r²)",
            inputs: ["Outer Radius", "Inner Radius"],

            calculate(R, r) {

                const answer =
                    Math.PI *
                    (
                        (R * R) -
                        (r * r)
                    );

                return {
                    valuesUsed:
                        `Outer Radius = ${R}<br>Inner Radius = ${r}`,

                    substitution:
                        `π(${R}² - ${r}²)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Circumference: {
            formula: "C = 2πR + 2πr",
            inputs: ["Outer Radius", "Inner Radius"],

            calculate(R, r) {

                const answer =
                    (2 * Math.PI * R) +
                    (2 * Math.PI * r);

                return {
                    valuesUsed:
                        `Outer Radius = ${R}<br>Inner Radius = ${r}`,

                    substitution:
                        `2π(${R}) + 2π(${r})`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        OuterCircumference: {
            formula: "2πR",
            inputs: ["Outer Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Outer Radius = ${radius}`,

                    substitution:
                        `2π×${radius}`,

                    answer:
                        (2 * Math.PI * radius).toFixed(2)
                };
            }
        },

        InnerCircumference: {
            formula: "2πr",
            inputs: ["Inner Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Inner Radius = ${radius}`,

                    substitution:
                        `2π×${radius}`,

                    answer:
                        (2 * Math.PI * radius).toFixed(2)
                };
            }
        },

        RingWidth: {
            formula: "R-r",
            inputs: ["Outer Radius", "Inner Radius"],

            calculate(outer, inner) {

                return {
                    valuesUsed:
                        `Outer Radius = ${outer}<br>Inner Radius = ${inner}`,

                    substitution:
                        `${outer}-${inner}`,

                    answer:
                        (outer - inner).toFixed(2)
                };
            }
        },
    }
};
