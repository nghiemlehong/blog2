import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'


export class MyNotification {
    static login(message) {
        switch (message) {
            case "USER_NAME_EMPTY":
                NotificationManager.error("Tên đăng nhập không được bỏ trống !", "", 3000)
                break
            case "PASSSWORD_EMPTY":
                NotificationManager.error("Mật khẩu không được bỏ trống !", "", 3000)
                break
            case "INVALID_USER_INFO":
                NotificationManager.error("Tên đăng nhập không tồn tại !", "", 3000)
                break
            case "PASSWORD_INCORRECT":
                NotificationManager.error("Mật khẩu không chính xác !", "", 3000)
                break
            case true:
                NotificationManager.warning("Đăng nhập thành công !", "", 3000)
                break
            default:
                NotificationManager.warning("Server quá tải !", "", 3000)

        }
    }

    static signup(message) {
        switch (message) {
            case "CAN_NOT_FOUND":
                NotificationManager.error("Ảnh đại diện phải tồn tại!", "", 3000)
                break
            case "INVALID_PASSWORD":
                NotificationManager.error("Mật khẩu không được bỏ trống!", "", 3000)
                break
            case "CAN_NOT_UPLOAD_AVATAR":
                NotificationManager.error("File ảnh đại diện quá lớn!", "", 3000)
                break
            case "INVALID_NAME":
                NotificationManager.error("Tên không được bỏ trống", "", 3000)
                break
            case "INVALID_EMAIL":
                NotificationManager.error("Email không được bỏ trống", "", 3000)
                break
            case "CONFIRM_PASSWORD_DOESN'T_MATCH":
                NotificationManager.error("Xác nhận mật khẩu không đúng", "", 3000)
                break
            case true:
                NotificationManager.warning("Đăng kí thành công !", "", 3000)
                break
            default:
                NotificationManager.warning("Server quá tải !", "", 3000)

        }
    }
}