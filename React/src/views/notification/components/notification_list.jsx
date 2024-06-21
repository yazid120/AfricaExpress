import React from "react";


const NotificationList = function({notifications})
{
  return(
    <>
    <div className="notification-list">
    {notifications.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">Utilisateur</th>
            <th className="text-center">Categorie</th>
            <th className="text-center">Message</th>
            <th className="text-center">Option</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map(notification => (
            <tr key={notification.id}>
              <td className="text-center">{notification.user_first_name}</td>
              <td className="text-center">{notification.category}</td>
              <td className="text-center">{notification.content}</td>
              <td className="text-center">
                <form action="/close-not" method="post">
                  <input type="hidden" name="id" value={notification.id} />
                  <input type="submit" value="fermer" className="btn btn-danger" />
                  {/** Include CSRF protection if necessary */}
                  {/* {csrf_field()} */}
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-gray-800 rounded p-4 bg-gray-100">no notifications yet</p>
    )}
  </div>
    </>
  )
}
export default NotificationList;
