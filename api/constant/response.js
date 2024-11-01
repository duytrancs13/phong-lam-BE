const STATUS = {
  SUCCESS: 200,
  ERROR: 500,
};

const MESSAGE = {
  SUCCESS: {
    code: 0,
    message: "Successfully",
  },
  SERVER: {
    code: 500,
    message: "Lỗi máy chủ nội bộ",
  },
  INVALID_TOKEN: {
    code: 403,
    message: "Token không hợp lệ",
  },
  INVALID_REFRESH_TOKEN: {
    code: 402,
    message: "Refresh token không hợp lệ",
  },
  NOT_FOUND_TOKEN: {
    code: 404,
    message: "Không cung cấp token",
  },
  NOT_FOUND_REFRESH_TOKEN: {
    code: 404,
    message: "Không cung cấp refresh token",
  },
  EXPIRED_REFRESH_TOKEN: {
    code: 419,
    message: "Refresh token đã hết hạn",
  },
  
  // SIGN UP
  EXIST_EMAIL: {
    code: 400,
    message: "Email đã tồn tại",
  },
  EXIST_USERNAME: {
    code: 409,
    message: "Username đã tồn tại",
  },
  // SIGN_IN
  NOT_EXIST_EMAIL: {
    code: 400,
    message: "Email chưa được đăng ký",
  },
  INCORRECT_PASSWORD: {
    code: 401,
    message: "Password của bạn không đúng",
  },
  // RESET PASSWORD
  INVALID_USER: {
    code: 400,
    message: "Không định danh người dùng",
  },

  // ADD TO CART
  NOT_EXIST_CART: {
    code: 404,
    message: "Giỏ hàng không tồn tại",
  },
  EXIST_COURSE: {
    code: 400,
    message: "Khoá học đã tồn tại",
  },
  INVALID_COURSE: {
    code: 400,
    message: "Khoá học không đúng",
  },
  NOT_EXIST_COURSE: {
    code: 404,
    message: "Khoá học không tồn tại",
  },
  INVALID_INPUT: {
    code: 405,
    message: "Dữ liệu đầu vào không đúng",
  },
  NOT_EXIST_COURSE_IN_CART: {
    code: 406,
    message: "Không tìm thấy khoá học trong giỏ hàng",
  },
  EXIST_COURSE_IN_MY_COURSE: {
    code: 407,
    message: "Bạn đã mua khoá học này",
  },
  NOT_PURCHASED_COURSE: {
    code: 408,
    message: "Bạn chưa mua khoá học này",
  },

  MOMO_ERROR: {
    code: 9001,
    message: "Lỗi hệ thông thanh toán MOMO",
  },
};

const ROLE = {
  ADMIN : "ADMIN",
  USER: "USER"
}

module.exports = { STATUS, MESSAGE, ROLE };
