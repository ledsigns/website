import React from "react";
export default function GalleryItem(src, caption, url, height, width) {
  if (height === undefined) {
    height = "200px";
  }
  if (width === undefined) {
    width = "240px";
  }
  return (
    <div style={{ padding: "20px" }}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"
      />
      <link rel="stylesheet" href="cards-gallery.css" />
      {/* <div style={{}} class="col-md-6 col-lg-3"> */}
      <div class="card border-0 transform-on-hover">
        {/* <img
            src={src}
            alt="Card Image"
            class="card-img-top"
          /> */}

        <a class="lightbox" href={url}>
          <div
            style={{
              backgroundImage: `url(${src})`, //where give the next links
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              // backgroundSize: "cover",
              // backgroundPosition: "centered",
              // backgroundAttachment: "fixed",
              width: width,
              height: height
            }}
          />
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // flexDirection: "column",
            // textAlign: "center",
            height: "30px"
          }}
        >
          <p style={{ paddingTop: "5px" }}>{caption}</p>
        </div>
      </div>
    </div>
  );
}
