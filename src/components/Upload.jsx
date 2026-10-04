import pdfToText from 'react-pdftotext'
export default function Upload() {
  function extractText(e) {
    const file = e.target.files[0];
    pdfToText(file).then(text => console.log(text))
    .catch(err => console.error("Failed to extract text from pdf"))
  }
  return (
    <div>
      
      <input type="file" onChange={extractText} />
    </div>
  )
}
