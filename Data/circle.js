const circle = {
    Circle: {
        Area: {
            formula: "A = πr²",
            inputs: ["Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `A = π × ${radius}²`,

                    answer:
                        (Math.PI * radius * radius).toFixed(2)
                };
            }
        },

        Circumference: {
            formula: "C = 2πr",
            inputs: ["Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `C = 2 × π × ${radius}`,

                    answer:
                        (2 * Math.PI * radius).toFixed(2)
                };
            }
        },

        Diameter: {
            formula: "D = 2r",
            inputs: ["Radius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Radius = ${radius}`,

                    substitution:
                        `D = 2 × ${radius}`,

                    answer:
                        (radius * 2).toFixed(2)
                };
            }
        },

        ChordLength: {
            formula: "c = 2r sin(θ/2)",
            inputs: ["Radius", "Central Angle"],

            calculate(radius, angle) {

                const radians =
                    angle * Math.PI / 180;

                const chord =
                    2 *
                    radius *
                    Math.sin(radians / 2);

                return {
                    valuesUsed:
                        `Radius = ${radius}<br>Central Angle = ${angle}°`,

                    substitution:
                        `2 × ${radius} × sin(${angle}/2)`,

                    answer:
                        chord.toFixed(2)
                };
            }
        },

        DistanceToChord: {
            formula: "d = √(r² - (c/2)²)",
            inputs: ["Radius", "Chord Length"],

            calculate(radius, chord) {

                const distance =
                    Math.sqrt(
                        radius * radius -
                        Math.pow(chord / 2, 2)
                    );

                return {
                    valuesUsed:
                        `Radius = ${radius}<br>Chord Length = ${chord}`,

                    substitution:
                        `√(${radius}² - (${chord}/2)²)`,

                    answer:
                        distance.toFixed(2)
                };
            }
        },

        TangentLength: {
            formula: "T = √(d²-r²)",
            inputs: ["Distance From Centre", "Radius"],

            calculate(distance, radius) {

                const tangent =
                    Math.sqrt(
                        distance * distance -
                        radius * radius
                    );

                return {
                    valuesUsed:
                        `Distance = ${distance}<br>Radius = ${radius}`,

                    substitution:
                        `√(${distance}² - ${radius}²)`,

                    answer:
                        tangent.toFixed(2)
                };
            }
        },

        CentralAngle: {
            formula: "θ = 360L/(2πr)",
            inputs: ["Arc Length", "Radius"],

            calculate(arcLength, radius) {

                const angle =
                    (360 * arcLength) /
                    (2 * Math.PI * radius);

                return {
                    valuesUsed:
                        `Arc Length = ${arcLength}<br>Radius = ${radius}`,

                    substitution:
                        `(360 × ${arcLength}) ÷ (2π × ${radius})`,

                    answer:
                        angle.toFixed(2) + "°"
                };
            }
        },

        InscribedAngle: {
            formula: "θ = Central Angle / 2",
            inputs: ["Central Angle"],

            calculate(centralAngle) {

                const angle =
                    centralAngle / 2;

                return {
                    valuesUsed:
                        `Central Angle = ${centralAngle}°`,

                    substitution:
                        `${centralAngle} ÷ 2`,

                    answer:
                        angle.toFixed(2) + "°"
                };
            }
        },

        RadiusFromArea: {
            formula: "r = √(A/π)",
            inputs: ["Area"],

            calculate(area) {

                const radius =
                    Math.sqrt(area / Math.PI);

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√(${area}/π)`,

                    answer:
                        radius.toFixed(2)
                };
            }
        },

        RadiusFromCircumference: {
            formula: "r = C/(2π)",
            inputs: ["Circumference"],

            calculate(circumference) {

                const radius =
                    circumference /
                    (2 * Math.PI);

                return {
                    valuesUsed:
                        `Circumference = ${circumference}`,

                    substitution:
                        `${circumference} ÷ (2π)`,

                    answer:
                        radius.toFixed(2)
                };
            }
        },
        
        RadiusFromDiameter: {
            formula: "r = d/2",
            inputs: ["Diameter"],

            calculate(diameter) {

                const radius =
                    diameter / 2;

                return {
                    valuesUsed:
                        `Diameter = ${diameter}`,

                    substitution:
                        `${diameter} ÷ 2`,

                    answer:
                        radius.toFixed(2)
                };
            }
        },

        AreaFromCircumference: {
            formula: "A = C²/(4π)",
            inputs: ["Circumference"],

            calculate(circumference) {

                const area =
                    (circumference * circumference) /
                    (4 * Math.PI);

                return {
                    valuesUsed:
                        `Circumference = ${circumference}`,

                    substitution:
                        `${circumference}² ÷ (4π)`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        DiameterFromCircumference: {
            formula: "d = C/π",
            inputs: ["Circumference"],

            calculate(circumference) {

                const diameter =
                    circumference / Math.PI;

                return {
                    valuesUsed:
                        `Circumference = ${circumference}`,

                    substitution:
                        `${circumference} ÷ π`,

                    answer:
                        diameter.toFixed(2)
                };
            }
        },

        AreaFromDiameter: {
            formula: "A = πd²/4",
            inputs: ["Diameter"],

            calculate(diameter) {

                const area =
                    Math.PI *
                    diameter *
                    diameter /
                    4;

                return {
                    valuesUsed:
                        `Diameter = ${diameter}`,

                    substitution:
                        `π × ${diameter}² ÷ 4`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        CircumferenceFromDiameter: {
            formula: "C = πd",
            inputs: ["Diameter"],

            calculate(diameter) {

                const circumference =
                    Math.PI * diameter;

                return {
                    valuesUsed:
                        `Diameter = ${diameter}`,

                    substitution:
                        `π × ${diameter}`,

                    answer:
                        circumference.toFixed(2)
                };
            }
        }
    }
};

