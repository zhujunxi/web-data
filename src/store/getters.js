const getters = {
  roleLevel: state => state.user.userRole.role_level || ""
};
export default getters;
