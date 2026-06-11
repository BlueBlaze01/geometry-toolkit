const triangle = {
    Triangle: {

        Area: {
            formula: "A = ½bh",
            inputs: ["Base", "Height"],

            calculate(base, height) {

                const answer =
                    0.5 * base * height;

                return {
                    valuesUsed:
                        `Base = ${base}<br>Height = ${height}`,

                    substitution:
                        `A = ½ × ${base} × ${height}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = a + b + c",
            inputs: ["Side A", "Side B", "Side C"],

            calculate(a, b, c) {

                const answer =
                    a + b + c;

                return {
                    valuesUsed:
                        `Side A = ${a}<br>Side B = ${b}<br>Side C = ${c}`,

                    substitution:
                        `${a} + ${b} + ${c}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },
    

        HeronsArea: {
            formula: "A = √(s(s-a)(s-b)(s-c))",
            inputs: ["Side A", "Side B", "Side C"],

            calculate(a, b, c) {

                const s =
                    (a + b + c) / 2;

                const answer =
                    Math.sqrt(
                        s *
                        (s - a) *
                        (s - b) *
                        (s - c)
                    );

                return {
                    valuesUsed:
                        `Side A = ${a}<br>Side B = ${b}<br>Side C = ${c}`,

                    substitution:
                        `√(${s}(${s-a})(${s-b})(${s-c}))`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Hypotenuse: {
            formula: "c = √(a² + b²)",
            inputs: ["Side A", "Side B"],

            calculate(a, b) {

                const answer =
                    Math.sqrt(
                        a * a +
                        b * b
                    );

                return {
                    valuesUsed:
                        `Side A = ${a}<br>Side B = ${b}`,

                    substitution:
                        `√(${a}² + ${b}²)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        MissingSide: {
            formula: "a = √(c² - b²)",
            inputs: ["Hypotenuse", "Known Side"],

            calculate(c, b) {

                const answer =
                    Math.sqrt(
                        c * c -
                        b * b
                    );

                return {
                    valuesUsed:
                        `Hypotenuse = ${c}<br>Known Side = ${b}`,

                    substitution:
                        `√(${c}² - ${b}²)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        }
    }
};