module.exports = {
  theme: {
    extend: {
      fontFamily: {
        base: ["Ubuntu", "serif"],
        headings: ["Montserrat", "serif"],
      },
      colors: {
        base: {
          100: "#var(--color-bg-1)",
          200: "#var(--color-bg-2)",
          300: "#var(--color-bg-3)",
        },
        txt: "#var(--color-txt)",
        btn: {
          100: "#23ae19",
          200: "#018f06",
        },
        btn2: {
          100: "#8ed1fc",
          200: "#68c2fbff",
        },
        scs: "green",
        err: "red",
        chv: "white",
        lnk: "#f40f48ff",
      },
      boxShadow: {
        pnl: "var(--shadow-pnl)",
        btn: "var(--shadow-btn)",
      },
      width: {
        low: "300px",
        cnt: "700px",
        pnl: "1000px",
        btn: "100px",
        cln: "40px",
        icn: "24px",
      },
      maxWidth: {
        low: "300px",
        cnt: "700px",
        pnl: "1000px",
        btn: "100px",
        cln: "40px",
        icn: "24px",
      },
      height: {
        btn: "35px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "24px",
        xl: "48px",
        "2xl": "96px",
      },
      borderRadius: {
        sm: "2px",
      },
      zIndex: {
        base: 0,
      },
    },
    screens: {
      header: "400px",
    },
  },
};
