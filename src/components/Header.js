import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Header = () => {
  const Download = async () => {
    const pdf = document.querySelector(".resume");
    const HTML_WIDTH = pdf.clientWidth;
    const HTML_HEIGHT = pdf.clientHeight;
    const doc = new jsPDF("p", "pt", "a4");
    await html2canvas(pdf, {}).then((canvas) => {
      doc.addImage(
        canvas.toDataURL("image/jpeg", 1),
        "JPG",
        0,
        0,
        HTML_WIDTH,
        HTML_HEIGHT
      );
    });

    doc.save("resume.pdf");
  };

  return (
    <div className="header">
      <h1>Create Resume</h1>
      <button className="download-btn" onClick={Download}>
        Download PDF
      </button>
    </div>
  );
};

export default Header;
