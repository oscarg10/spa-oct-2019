function createPictures(pics) {
  return pics
    .map(({ url }) => {
      return `
    <figure>
      <img src="${url}"/>
      <figcaption></figcaption>
    </figure>`;
    })
    .join(" ");
}

export default st => `${createPictures(st.pics)}`;

//         return`
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some header</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some Smaml Test</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
//       <div>
//         <figure><img src="https://source.unsplash.com/random/800x600" alt="" /></figure>
//         <h2>Some Heading</h2>
//         <p>Some small text</p>
//       </div>
// `;
