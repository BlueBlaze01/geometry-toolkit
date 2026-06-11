const sector = {
    Sector: {

        Area: {
            formula: "A = (θ/360)πr²",
            inputs: ["Radius", "Angle"],

            calculate(radius, angle) {

                const answer =
                    (angle / 360) *
                    Math.PI *
                    radius *
                    radius;

                return {
                    valuesUsed:
                        `Radius = ${radius}<br>Angle = ${angle}`,

                    substitution:
                        `(${angle}/360) × π × ${radius}²`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        ArcLength: {
            formula: "L = (θ/360)2πr",
            inputs: ["Radius", "Angle"],

            calculate(radius, angle) {

                const answer =
                    (angle / 360) *
                    2 *
                    Math.PI *
                    radius;

                return {
                    valuesUsed:
                        `Radius = ${radius}<br>Angle = ${angle}`,

                    substitution:
                        `(${angle}/360) × 2π × ${radius}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "2r + Arc Length",
            inputs: ["Radius", "Angle"],

            calculate(radius, angle) {

                const arc =
                    (angle / 360) *
                    2 *
                    Math.PI *
                    radius;

                return {
                    valuesUsed:
                        `Radius = ${radius}<br>Angle = ${angle}`,

                    substitution:
                        `2×${radius}+${arc.toFixed(2)}`,

                    answer:
                        (arc + 2 * radius).toFixed(2)
                };
            }
        },
    }
};