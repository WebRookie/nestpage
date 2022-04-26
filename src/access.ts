/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { userInfo?: API.CurrentUser | undefined }) {
  const { userInfo } = initialState || {};
  console.log(initialState);
  return {
    canAdmin: userInfo && userInfo.role === 'admin',
  };
}
