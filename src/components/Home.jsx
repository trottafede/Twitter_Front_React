import React from "react";
import Navbar from "./Navbar/Navbar";
export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          {" "}
          <Navbar />{" "}
        </div>
        <div id="middleSideHome" class="col-lg-6">
          <div id="inicio">
            <h1>Inicio</h1>
          </div>

          {/* <% if (passportUser) { %>
        <div id="QueEstasPensando">
          <div class="row">
            <div class="col-lg-2">
              <img
                src="<%- passportUser.image %>"
                alt="<%- passportUser.firstname %> <%- passportUser.lastname %>"
              />
            </div>
            <div class="col-lg-10">
              <form action="/tweets/store" method="post">
                <div>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Qué estás pensando?"
                    name="tweet"
                    id="tweet"
                  />
                  <p>Cualquier persona puede responder</p>
                  <hr />
                  <div class="d-flex justify-content-around">
                    <i class="far fa-image"></i>
                    <i class="fas fa-gift"></i>
                    <i class="fas fa-question"></i>
                    <i class="fas fa-smile-beam"></i>
                    <i class="fas fa-calendar-times"></i>
                    <input
                      class="btn btn-primary"
                      type="submit"
                      value="Twittear"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr />
        </div>
        <% } %> <% if (tweets) { %>
        <!---->
        <% tweets.forEach(function(tweet){ %>
        <!--  -->
        <div class="singleTweet">
          <div class="row">
            <div class="col-lg-1">
              <img
                src="<%- tweet.User.image %>"
                alt="<%- tweet.User.firstname %> <%- tweet.User.lastname %>"
              />
            </div>
            <div class="col-lg-11">
              <p>
                <a href="/users/<%- tweet.User.username %>"
                  ><%- tweet.User.firstname %> <%- tweet.User.lastname %></a
                >
                <em
                  >@<%- tweet.User.username %> - <%-
                  tweet.createdAt.toLocaleString("es-ES"); %></em
                >
              </p>
              <p><%- tweet.Text%></p>
              <div class="d-flex justify-content-around">
                <em><i class="far fa-comment"></i> 20</em>
                <em><i class="fas fa-retweet"></i> 5</em>
                <% if (tweet.Likes.includes(passportUser._id)) { %>
                <em
                  ><a href="/likes/destroy/<%- tweet.id %>"
                    ><i class="fas fa-heart redHeart"></i
                  ></a>
                  <%- tweet.Likes.length %></em
                >
                <% } else { %>
                <em
                  ><a href="/likes/update/<%- tweet.id %>"
                    ><i class="far fa-heart"></i
                  ></a>
                  <%- tweet.Likes.length %></em
                >
                <% } %>
                <i class="fas fa-share"></i>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <% }); %>
        <!--  -->
        <% } else { %>
        <p>No hay tweets, se el primero</p>
        <% } %> 
      </div>*/}
          {/* <div class="col-lg-3">
        <div id="buscador" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Buscar en twitter"
          />
          <label for="search"
            ><i class="fas fa-search"></i> Buscar en Twitter</label
          >
        </div>

        <div id="tendencias">
          <h3>Tendencias para ti</h3>

          <div class="noticia">
            <p>Politíca - Tendencias</p>
            <h4>Ortega</h4>
            <p>36,3 mil Tweets</p>
          </div>

          <div class="noticia">
            <p>Tendencia en Uruguay</p>
            <h4>URSS</h4>
            <p>2.093 Tweets</p>
          </div>

          <div class="noticia">
            <p>Tendencia en Uruguay</p>
            <h4>#Arcane</h4>
            <p>120 mil Tweets</p>
          </div>

          <div class="noticia">
            <p>Entretenimiento - Tendencias</p>
            <h4>#Eternals</h4>
            <p>36,3 mil Tweets</p>
          </div>

          <div class="noticia">
            <p>Tendencia en Uruguay</p>
            <h4>Teletón</h4>
            <p>6.678 Tweets</p>
          </div>
          <a href="#">Mostrar más</a>
        </div>

        <div id="whoToFollow">
          <h3>A quién seguir</h3>

          <% users.forEach(function(User){ %>
          <div class="toFollow">
            <img
              src="<%- User.image %>"
              alt="<%- User.firstname%> <%- User.lastname %>"
            />
            <div id="userInfo">
              <h5>
                <a href="/users/<%- User.username %>"
                  ><%- User.firstname.substr(0, 1)%>. <%-
                  User.lastname.substr(0, 6 ) %></a
                ><i class="fa fa-check-circle"></i>
              </h5>
              <p>@<%- User.username %></p>
              <p>People</p>
            </div>
            <div id="followBtn">
              <% if (passportUser.following.includes(User._id)) { %>
              <a
                class="btn btn-outline-danger whiteFont"
                href="/users/destroyFriendship/<%- User.username %>"
                >Unfollow</a
              >
              <% } else { %>
              <a
                class="btn btn-light"
                href="/users/following/<%- User.username %>"
                >Follow</a
              >
              <% } %>
            </div>
          </div>
          <% }); %>
          <a href="#">Mostrar más</a>
        </div>

        <div id="copyright">
          <p>Condiciones de Servicio Política de Privacidad</p>
          <p>
            Política de cookies Información de anuncios
            <br />
            Más opciones © 2021 Twitter, Inc.
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
