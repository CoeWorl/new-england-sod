import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <span id="header-info">Sod Delivery</span>
        <span>|</span>
        <span id="header-info">Sod Prep</span>
        <span>|</span>
        <span id="header-info">Sod Installation</span>
      </div>
    </div>
  );
}
