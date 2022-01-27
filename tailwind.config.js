module.exports = {
  mode:'jit',
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:false,
  theme: {
    screens:{
      xs:'375px',
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    colors:{
      "primary":"hsl(180, 29%, 50%)",
      "light-cyan--bg":"hsl(180, 52%, 96%)",
      "light-cyan--filter":"hsl(180, 31%, 95%)",
      "dark-cyan":"hsl(180, 8%, 52%)",
      "very-dark-cyan":"hsl(180, 14%, 20%)",
      "white":"rgba(255,255,255)",
      "black":"rgba(0,0,0)"
    },
    fontFamily:{
      'sans':['Noto Sans TC', 'sans-serif'],
      'serif':['Noto Serif SC', 'serif']
    },
    fontSize:{
      'base':'15px',
      'xs':'0.75rem',
      'sm':'1rem',
      'md':'1.125rem',
      'lg':'1.25rem',
      'xl':'1.5rem',
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1.5rem',
        lg:'2rem',
        xl:'2.5rem'
      }
    },
    spacing:{
      '1/2':'4px',
      '1':  '8px',
      '2':  '12px',
      '3':  '16px',
      '4':  '24px',
      '5':  '32px',
      '6':  '48px',
      '7':  '60px',
      '8':  '80px',
    },
    extend: {
      boxShadow:{
        'base':'2px 8px 15px rgba(100, 186, 186, 0.2)'
      }
    },
  },
  plugins: [],
}
