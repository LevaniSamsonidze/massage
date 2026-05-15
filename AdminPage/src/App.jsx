import { useEffect, useState } from "react"
import { format } from "date-fns";
import { ka } from "date-fns/locale";
import { toast } from "react-toastify";
 
const API = import.meta.env.VITE_API;
 
function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);
    const [verifyUsers, setVerifyUsers] = useState([])
 
    useEffect(() => {
        getUsers();
    }, [])
 
    const getUsers = async () => {
        setLoading(true);
        const response = await fetch(`${API}/users`);
        const data = await response.json();
        
        setUsers(data.users);
        setVerifyUsers(data.verifiedUsers);
        setLoading(false);
    }
 
    const deleteUser = async (id) => {
        const response = await fetch(`${API}/users/${id}`, {
            method: "DELETE"
        })
        const data = await response.json();
        toast.success(data.message);
        getUsers();
    }
 
    const verifyUser = async (id) => {
        const response = await fetch(`${API}/verifuUser/${id}`, {
            method: "POST",
        });
        const data = await response.json();
        toast.success(data.message);
        getUsers();
    }

    const deleteVerifyUser = async (id) => {
        const response = await fetch(`${API}/verifuUser/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        toast.success(data.message);
        getUsers();
    }
 
    if (loading) {
        return (
            <div className="admin-loading">
                <div className="admin-loading__spinner" />
                <span>იტვირთება...</span>
            </div>
        )
    }
 
    return (
        <div className="admin-root">
            <header className="admin-header">
                <div className="admin-header__brand">
                    <span className="admin-header__dot" />
                    <h1>Admin Panel</h1>
                </div>
                <p className="admin-header__sub">მასაჟი ბორჯომში</p>
            </header>
 
            <main className="admin-main">
 
                {/* ── მომლოდინე ── */}
                <section className="admin-section">
                    <div className="admin-section__head">
                        <h2 className="admin-section__title">მომლოდინე მომხმარებლები</h2>
                        <span className="admin-section__badge admin-section__badge--pending">
                            {users?.length ?? 0}
                        </span>
                    </div>
 
                    {users && users.length > 0 ? (
                        <div className="admin-table-wrap">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>სახელი</th>
                                        <th>თარიღი</th>
                                        <th>კურსი</th>
                                        <th>ტელეფონი</th>
                                        <th>კომენტარი</th>
                                        <th>მოქმედება</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td className="admin-table__name">{user.name}</td>
                                            <td className="admin-table__date">
                                                {format(new Date(user.date), "dd MMM yyyy, HH:mm", { locale: ka })}
                                            </td>
                                            <td>
                                                <span className="admin-tag">{user.massageType}</span>
                                            </td>
                                            <td className="admin-table__phone">{user.phone}</td>
                                            <td className="admin-table__comment">
                                                {user.comment || <span className="admin-table__empty">—</span>}
                                            </td>
                                            <td>
                                                <div className="admin-actions">
                                                    <button
                                                        className="admin-btn admin-btn--verify"
                                                        onClick={() => verifyUser(user._id)}
                                                    >
                                                        ✓ დადასტურება
                                                    </button>
                                                    <button
                                                        className="admin-btn admin-btn--delete"
                                                        onClick={() => deleteUser(user._id)}
                                                    >
                                                        წაშლა
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="admin-empty">
                            <span>მომლოდინე მომხმარებელი არ არის</span>
                        </div>
                    )}
                </section>
 
                {/* ── დადასტურებული ── */}
                <section className="admin-section">
                    <div className="admin-section__head">
                        <h2 className="admin-section__title">დადასტურებული მომხმარებლები</h2>
                        <span className="admin-section__badge admin-section__badge--verified">
                            {verifyUsers?.length ?? 0}
                        </span>
                    </div>
 
                    {verifyUsers && verifyUsers.length > 0 ? (
                        <div className="admin-table-wrap">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>სახელი</th>
                                        <th>თარიღი</th>
                                        <th>კურსი</th>
                                        <th>ტელეფონი</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {verifyUsers.map(user => (
                                        <tr key={user._id} className="admin-table__row--verified">
                                            <td className="admin-table__name">{user.name}</td>
                                            <td className="admin-table__date">
                                                {format(new Date(user.date), "dd MMM yyyy, HH:mm", { locale: ka })}
                                            </td>
                                            <td>
                                                <span className="admin-tag admin-tag--verified">{user.massageType}</span>
                                            </td>
                                            <td className="admin-table__phone">{user.phone}</td>
                                            <td>
                                                <div className="admin-actions">
                                                    <button
                                                    className="admin-btn admin-btn--delete"
                                                    onClick={() => deleteVerifyUser(user._id)}
                                                    >
                                                    წაშლა
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="admin-empty">
                            <span>დადასტურებული მომხმარებელი არ არის</span>
                        </div>
                    )}
                </section>
 
            </main>
        </div>
    )
}
 
export default App
 