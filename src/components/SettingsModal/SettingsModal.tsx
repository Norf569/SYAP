import { useState } from "react";
import "./SettingsModal.css";
import "./SettingsModal.adaptive.css";

interface SettingsModalProps {
  close: () => void;
  /** Called after name/avatar are written to localStorage (e.g. refresh profile UI without a full page reload). */
  onSaved?: () => void;
}

const SettingsModal = ({ close, onSaved }: SettingsModalProps) => {
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("userAvatar") || "/img/Grid 2.png"
  );

  const avatars = [
    "/img/Grid 2.png",
    "/img/grid 1.png",
    "/img/Grid 3.png",
  ];

  const save = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userAvatar", avatar);
    onSaved?.();
    close();
  };

  return (
    <div className="settings-overlay" onClick={close}>
      <div className="settings-window" onClick={(e) => e.stopPropagation()}>
        <h2 className="settings-title">Profile settings</h2>

        <label className="settings-label">Name</label>
        <input
          type="text"
          className="settings-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="settings-label">Choose avatar</label>

        <div className="settings-avatars">
          {avatars.map((img) => (
            <button
              key={img}
              type="button"
              className={`settings-avatar ${avatar === img ? "active" : ""}`}
              onClick={() => setAvatar(img)}
            >
              <img src={img} alt="avatar" />
            </button>
          ))}
        </div>

        <button className="settings-save" onClick={save}>
          Save
        </button>

        <button className="settings-close" onClick={close}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
