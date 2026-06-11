const ellipse = {
    Ellipse: {

        Area: {
            formula: "A = πab",
            inputs: ["Semi-Major Axis", "Semi-Minor Axis"],

            calculate(a, b) {

                const answer =
                    Math.PI * a * b;

                return {
                    valuesUsed:
                        `Semi-Major Axis = ${a}<br>Semi-Minor Axis = ${b}`,

                    substitution:
                        `π × ${a} × ${b}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Circumference: {
            formula: "C ≈ π[3(a+b) - √((3a+b)(a+3b))]",
            inputs: ["Semi-Major Axis", "Semi-Minor Axis"],

            calculate(a, b) {

                const answer =
                    Math.PI *
                    (
                        3 * (a + b)
                        -
                        Math.sqrt(
                            (3 * a + b) *
                            (a + 3 * b)
                        )
                    );

                return {
                    valuesUsed:
                        `Semi-Major Axis = ${a}<br>Semi-Minor Axis = ${b}`,

                    substitution:
                        `π[3(${a}+${b}) - √((3×${a}+${b})(${a}+3×${b}))]`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        MajorAxis: {
            formula: "Major Axis = 2a",
            inputs: ["Semi-Major Axis"],

            calculate(a) {

                const answer =
                    2 * a;

                return {
                    valuesUsed:
                        `Semi-Major Axis = ${a}`,

                    substitution:
                        `2 × ${a}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        MinorAxis: {
            formula: "Minor Axis = 2b",
            inputs: ["Semi-Minor Axis"],

            calculate(b) {

                const answer =
                    2 * b;

                return {
                    valuesUsed:
                        `Semi-Minor Axis = ${b}`,

                    substitution:
                        `2 × ${b}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        SemiMajorAxis: {
            formula: "a = Major Axis / 2",
            inputs: ["Major Axis"],

            calculate(axis) {

                return {
                    valuesUsed: `Major Axis = ${axis}`,
                    substitution: `${axis} ÷ 2`,
                    answer: (axis / 2).toFixed(2)
                };
            }
        },

        SemiMinorAxis: {
            formula: "b = Minor Axis / 2",
            inputs: ["Minor Axis"],

            calculate(axis) {

                return {
                    valuesUsed: `Minor Axis = ${axis}`,
                    substitution: `${axis} ÷ 2`,
                    answer: (axis / 2).toFixed(2)
                };
            }
        },

        Eccentricity: {
            formula: "e = √(1 - b²/a²)",
            inputs: ["Semi-Major Axis", "Semi-Minor Axis"],

            calculate(a, b) {

                const e =
                    Math.sqrt(
                        1 - ((b * b) / (a * a))
                    );

                return {
                    valuesUsed:
                        `a = ${a}<br>b = ${b}`,

                    substitution:
                        `√(1 - (${b}²/${a}²))`,

                    answer:
                        e.toFixed(4)
                };
            }
        },

        FocusDistance: {
            formula: "c = √(a²-b²)",
            inputs: ["Semi-Major Axis", "Semi-Minor Axis"],

            calculate(a, b) {

                const c =
                    Math.sqrt(
                        a * a -
                        b * b
                    );

                return {
                    valuesUsed:
                        `a = ${a}<br>b = ${b}`,

                    substitution:
                        `√(${a}² - ${b}²)`,

                    answer:
                        c.toFixed(2)
                };
            }
        },
    }
};