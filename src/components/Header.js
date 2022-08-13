import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Header = () => {
  const Download = async () => {
    const pdf = document.querySelector(".resume");
    const doc = new jsPDF("p", "mm", "a4");
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    await html2canvas(pdf, { scale: 5 }).then((canvas) => {
      doc.addImage(canvas.toDataURL("image/jpeg"), "JPG", 0, 0, width, height);
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
