import './App.css';

function App() {
  let names = [
    {
      src: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      name: "Avengers",
      imdb: "5.7",
      text: `Lorem Ipsum is simply
       dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy r took a galley of type and scrambled it to make a type specimen book. It has survived not only  five 
       centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
    },

    {
      name: "The Batman",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj2pBB2b4aX3hIj3DEEDCFKcxMLZ5pRlPRA&usqp=CAU",
      imdb: "7.8",
      text: `Lorem Ipsum is simply
       dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy r took a galley of type and scrambled it to make a type specimen book. It he 1960s with the release of Letraset sheets containing Lorem`
    },
    {
      name: "Stranger things",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpSjYsZsQZ6cYArEtc3Zlh-gXZCydERz7ZQ&usqp=CAU",
      imdb: "9.9",
      text: `Lorem Ipsum is simply
       dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy r took a galley of type and scrambled it to make a type specimen book. It has survived not only  five 
       centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
    },
    {
      name: "Loki",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpP0AuVbqiB29vo_87oCp7W842YKMyeWSRgg&usqp=CAU",
      imdb: "9.9",
      text: `Lorem Ipsum is simply
       dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy r took a galley of type and scrambled it to make a type specimen book. Ited not only  five 
       centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
    }
  ];

  return (
    <div className="App">
      {names.map(a => <User name={a.name} src={a.src} imdb={a.imdb} text={a.text} />)}
    </div>
  );
}


function User({ name, src, imdb, text }) {
  return (
    <section>
      <div className='imgcont'>
        <img className='image' src={src} />
      </div>

      <div className='title-header'>
        <h1 className='heading'>{name}</h1>
        <p className='para'><i><i class="fa-solid fa-star"></i></i> <span>{imdb}</span> </p>
      </div>
      <div className='tests'>
        <p >
          {text}
        </p>
      </div>
    </section>
  )
}

export default App;
{/* <User
        name="vasanth"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-MG1E0b4Ylgp-wnZjy82g3ZKHyx_FVDy00FfqqOk5y8euX43uhU4lN11y1qkG_Pjhwc&usqp=CAU"
      />

      <User
        name="Rajesh"
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
      />
      <User
        name="Aswin"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-MG1E0b4Ylgp-wnZjy82g3ZKHyx_FVDy00FfqqOk5y8euX43uhU4lN11y1qkG_Pjhwc&usqp=CAU"
      /> */}
{/* {names.map((a) => {
        <User name={a} />
      })} */}

