import { useState } from "react";
import "./Profile.css";

function Profile() {

  // Load saved data or use default values
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");

    return saved
      ? JSON.parse(saved)
      : {
          name: "Ashlin Jino",
          email: "ashlin@example.com",
          phone: "+91 98765 43210",
          image: "/file_000000006ff08211957c9db13a88237b.png"
        };
  });

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState(profile);

 
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setForm({
          ...form,
          image: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }

  function handleSave() {
    localStorage.setItem("profile", JSON.stringify(form));

    setProfile(form);
    setEditing(false);
  }


  function handleCancel() {
    setForm(profile);
    setEditing(false);
  }

  return (
    <div className="profile">

      <h1>My Profile</h1>

      <div className="profile-card">

        <div className="image">
          <img src={editing ? form.image : profile.image} alt="Profile" />
        </div>

        {editing ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <button onClick={handleSave}>
              Save Profile
            </button>

            <button onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>{profile.name}</h2>

            <p>Student</p>

            <hr />

            <div className="profile-info">
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Courses:</strong> 1</p>
              <p><strong>Completed:</strong> 0</p>
            </div>

            <button
              onClick={() => {
                setForm(profile);
                setEditing(true);
              }}
            >
              Edit Profile
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Profile;