
const isWeChatBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(userAgent);
};

const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipad/.test(userAgent);
};

const Testpage = () => {
  const isWeChat = isWeChatBrowser();
  console.log(isWeChat);
  
  const isMobileDevice = isMobile();
  console.log(isMobileDevice);

  return (
    <div>
      {isWeChat ? (
        <h1>当前浏览器是微信</h1>
      ) : (
        <h1>当前浏览器不是微信</h1>
      )}
      {isWeChat && isMobileDevice ? (
        <p>你正在使用移动设备访问微信浏览器。</p>
      ) : isWeChat ? (
        <p>你正在使用电脑访问微信浏览器。</p>
      ) : null}
    </div>
  );
};

export default Testpage;
