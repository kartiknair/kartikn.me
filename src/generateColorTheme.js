const generateTheme = () => {
  const colors = [
    {
      name: "Black",
      hex: "#000000",
    },
    {
      name: "Lead",
      hex: "#1d1f20",
    },
    {
      name: "Onyx Heart",
      hex: "#36393a",
    },
    {
      name: "Water Ouzel",
      hex: "#4e5255",
    },
    {
      name: "Shuttle Grey",
      hex: "#62676a",
    },
    {
      name: "Rhythm & Blues",
      hex: "#72777b",
    },
    {
      name: "Wolverine",
      hex: "#92979b",
    },
    {
      name: "Quiet Grey",
      hex: "#b7bbbd",
    },
    {
      name: "December Sky",
      hex: "#d5d7d8",
    },
    {
      name: "Mercury",
      hex: "#eaebeb",
    },
    {
      name: "Lynx White",
      hex: "#f7f7f8",
    },
    {
      name: "White",
      hex: "#ffffff",
    },
    {
      name: "Powdered Cocoa",
      hex: "#341a04",
    },
    {
      name: "Eyelash Camel",
      hex: "#5b2c06",
    },
    {
      name: "Gryphonne Sepia Wash",
      hex: "#813f09",
    },
    {
      name: "Powdered Coffee",
      hex: "#a24f0b",
    },
    {
      name: "Super Leaf Brown",
      hex: "#b6590d",
    },
    {
      name: "Tiger Moth Orange",
      hex: "#e06d10",
    },
    {
      name: "Shrimp Cocktail",
      hex: "#f4a15d",
    },
    {
      name: "Cream Blush",
      hex: "#f8c296",
    },
    {
      name: "Alluring Gesture",
      hex: "#fbdbc1",
    },
    {
      name: "Pico Ivory",
      hex: "#fdf1e7",
    },
    {
      name: "Nightmare",
      hex: "#0f2417",
    },
    {
      name: "Zucchini",
      hex: "#1c422b",
    },
    {
      name: "Midori",
      hex: "#285d3d",
    },
    {
      name: "Jungle Book Green",
      hex: "#31724b",
    },
    {
      name: "Medium Green",
      hex: "#398557",
    },
    {
      name: "Greenish",
      hex: "#46a46c",
    },
    {
      name: "Felt Green",
      hex: "#79c698",
    },
    {
      name: "Celadon Sorbet",
      hex: "#b0ddc2",
    },
    {
      name: "Sea Mist",
      hex: "#d8eee1",
    },
    {
      name: "Peaceful Rain",
      hex: "#eff8f3",
    },
    {
      name: "Black Feather",
      hex: "#0c2427",
    },
    {
      name: "Fog of War",
      hex: "#0c2231",
    },
    {
      name: "Prestige Green",
      hex: "#164249",
    },
    {
      name: "Duskwood",
      hex: "#163d57",
    },
    {
      name: "Pacific",
      hex: "#1d5962",
    },
    {
      name: "3AM in Shibuya",
      hex: "#1f567a",
    },
    {
      name: "King Tide",
      hex: "#26727e",
    },
    {
      name: "Sea Bed",
      hex: "#2b818e",
    },
    {
      name: "Blues",
      hex: "#276d9b",
    },
    {
      name: "Blue Bird Day",
      hex: "#2c7cb0",
    },
    {
      name: "Marine Tinge",
      hex: "#35a0b1",
    },
    {
      name: "Blue Tourmaline",
      hex: "#479ad1",
    },
    {
      name: "Arctic Ocean",
      hex: "#66c3d1",
    },
    {
      name: "Dun Morogh Blue",
      hex: "#7cb7de",
    },
    {
      name: "Havana Blue",
      hex: "#a5dce4",
    },
    {
      name: "Ariel",
      hex: "#add2eb",
    },
    {
      name: "Blue Emulsion",
      hex: "#d0edf1",
    },
    {
      name: "Azureish White",
      hex: "#d6e9f5",
    },
    {
      name: "Indigo White",
      hex: "#e9f7f9",
    },
    {
      name: "Insignia White",
      hex: "#ebf4fa",
    },
    {
      name: "Kon",
      hex: "#181e34",
    },
    {
      name: "Quill Tip",
      hex: "#2c365e",
    },
    {
      name: "Dive In",
      hex: "#404e88",
    },
    {
      name: "Amparo Blue",
      hex: "#5062aa",
    },
    {
      name: "Chetwode Blue",
      hex: "#6373b6",
    },
    {
      name: "Pale Iris",
      hex: "#8794c7",
    },
    {
      name: "Calm Interlude",
      hex: "#a5aed5",
    },
    {
      name: "Ace",
      hex: "#c8cde5",
    },
    {
      name: "Iris Ice",
      hex: "#e0e3f0",
    },
    {
      name: "Alpine Goat",
      hex: "#f1f3f8",
    },
    {
      name: "Blackcurrant",
      hex: "#2d1832",
    },
    {
      name: "Imperial Purple",
      hex: "#502b5a",
    },
    {
      name: "Nightly Violet",
      hex: "#753f83",
    },
    {
      name: "Vicious Violet",
      hex: "#8e4c9e",
    },
    {
      name: "Purple Plum",
      hex: "#9f5bb0",
    },
    {
      name: "Creeping Bellflower",
      hex: "#b683c3",
    },
    {
      name: "Catmint",
      hex: "#c9a2d2",
    },
    {
      name: "Sky Blue Pink",
      hex: "#dbc1e1",
    },
    {
      name: "Divine Dove",
      hex: "#ebddee",
    },
    {
      name: "Abalone",
      hex: "#f7f1f8",
    },
    {
      name: "English Breakfast",
      hex: "#430c15",
    },
    {
      name: "Surya Red",
      hex: "#711423",
    },
    {
      name: "Vivid Burgundy",
      hex: "#a01c32",
    },
    {
      name: "Cardinal",
      hex: "#bf223c",
    },
    {
      name: "Cruel Ruby",
      hex: "#da304c",
    },
    {
      name: "Purehearted",
      hex: "#e35f75",
    },
    {
      name: "Wonder Lust",
      hex: "#ec93a2",
    },
    {
      name: "Purple Thorn",
      hex: "#f3bac3",
    },
    {
      name: "Tootie Fruity",
      hex: "#f9dce1",
    },
    {
      name: "Pale Cherry Blossom",
      hex: "#fcf0f2",
    },
  ];

  /* HEX to RGB function */
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  /* RGB to HEX function */
  const rgbToHex = (rgb) => {
    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? "#" +
          ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : "";
  };

  /* Function to lighten or darken the passed color */
  const lightenDarkenColor = (col, amt) => {
    let usePound = false;
    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }
    const num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (
      (usePound ? "#" : "") +
      String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
    );
  };

  /* Function that gets the sRGB value of a color brightness value */
  const checksRGB = (color) => {
    if (color <= 0.03928) {
      return color / 12.92;
    } else {
      return Math.pow((color + 0.055) / 1.055, 2.4);
    }
  };

  /* Function that returns a color object */
  const getColorObject = (color) => {
    const colorObj = {
      r: checksRGB(color.r / 255),
      g: checksRGB(color.g / 255),
      b: checksRGB(color.b / 255),
    };
    return colorObj;
  };

  /* Function that calculates the ratio between two colors */
  const calculateRatio = (color1, color2) => {
    const colorOneObject = getColorObject(color1);
    const colorTwoObject = getColorObject(color2);
    const colorOneL =
      0.2126 * colorOneObject.r +
      0.7152 * colorOneObject.g +
      0.0722 * colorOneObject.b;
    const colorTwoL =
      0.2126 * colorTwoObject.r +
      0.7152 * colorTwoObject.g +
      0.0722 * colorTwoObject.b;
    if (colorOneL > colorTwoL) {
      return (colorOneL + 0.05) / (colorTwoL + 0.05);
    } else {
      return (colorTwoL + 0.05) / (colorOneL + 0.05);
    }
  };

  /* Main */

  function pairwise(list) {
    if (list.length < 2) {
      return [];
    }
    var first = list[0],
      rest = list.slice(1),
      pairs = rest.map((x) => [first, x]);
    return pairs.concat(pairwise(rest));
  }

  let pairs = pairwise(colors);
  pairs = pairs.map((pair) => {
    return pair.map((color) => color.hex);
  });

  const accessibleCombos = [];

  pairs.forEach((pair) => {
    if (calculateRatio(hexToRgb(pair[0]), hexToRgb(pair[1])) > 7.1)
      accessibleCombos.push(pair);
  });

  let randomCombo =
    accessibleCombos[Math.floor(Math.random() * accessibleCombos.length)];

  return randomCombo;
};

export default generateTheme;
