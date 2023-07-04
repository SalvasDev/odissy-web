import BasicLayout from "../../layouts/BasicLayout/BasicLayout"

const VideoDemosPage = () => {
  return (
    <>
      <BasicLayout title='Video demos page' pageDescription='En esta página encontrarás videos demostrativos.'>

        <div className="video">
          <h2> Demo Remolo Pizzas</h2>
          <video controls>
            <source src="/img/don-remolo/demo-don-remolo.mp4" type="video/mp4" />
            {/* <source src="/img/don-remolo/demo-don-remolo.ogg" type="video/ogg" />
            <source src="/img/don-remolo/demo-don-remolo.webm" type="video/webm" /> */}
          </video>
        </div>

      </BasicLayout>
    </>
  );
}

export default VideoDemosPage;
