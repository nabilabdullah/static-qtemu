import './App.css';

function App() {
  return (
    <div>
      {/* NAVIGASI */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger py-3">
        <a class="navbar-brand" href="#">QTemu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-5" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#create-meetup">Create Meetup <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#next-meetup">Next Meetup</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#about-meetup">About Meetup</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#members">Members</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="#past-meetups">Past Meetups</a>
            </li>
          </ul>
          <span class="navbar-text">
            Login
          </span>
        </div>
      </nav>

      {/* HERO */}
      <div class="bg-light m-3" id="create-meetup">
        <div class="row">
          <div class="col-4">
            <img src="meetup.jpg" width="100%" class="m-3" alt="ini foto" />
          </div>
          <div class="col-8">
            <div class="row ml-4 mt-4">
              <div class="col-12">
                <p class="text-xl font-weight-bold"><big>Hacktiv8 Meetup</big></p>
              </div>
            </div>
            <div class="row ml-4 mt-2">
              <div class="col-2">
                <p>Location</p>
              </div>
              <div class="col-10">
                <p>: Pontianak, Indonesia</p>
              </div>
              <div class="col-2">
                <p>Members</p>
              </div>
              <div class="col-10">
                <p>: 10</p>
              </div>
              <div class="col-2">
                <p>Organizers</p>
              </div>
              <div class="col-10">
                <p>: UPT. TIK Universitas Tanjungpura</p>
              </div>
            </div>
            <div class="row ml-4 mt-5">
              <div class="col-12">
                <button type="button" class="btn btn-danger">Join Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Meetup */}
      <div class="m-3 mt-5" id="next-meetup">
        <p class="text-xl font-weight-bold"><big>Next Meetup</big></p>
        <div class="bg-light m-2 p-2">
          <p class="font-weight-bold mt-3">Awesome Meetup and Event</p>
          <p class="font-weight-bold text-warning">28 Oktober 2023</p>
          <div class="row">
            <div class="col-12 text-justify">Hello JavaScript and React Js. Get ready for our monthly meetup PontianakJS! This will be our fifth meetup of 2023! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. Hello JavaScript and React Js. Get ready for our monthly meetup PontianakJS! This will be our fifth meetup of 2023! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. Remember to bring a photo ID to get through building security.</div>
          </div>
          <p class="mt-3">See you there!</p>
        </div>
      </div>

      {/* About Meetup */}
      <div class="m-3 mt-5" id="about-meetup">
        <p class="text-xl font-weight-bold"><big>About Meetup</big></p>
        <div class="m-2 p-2">
          <p class="">Come and meet other developers interested in the JavaScript and it's library in the Greater Pontianak area.</p>
          <p class="mt-3">Twitter: @PontianakJS and we use the hashtag #pontianakjs</p>
        </div>
      </div>

      {/* Members */}
      <div class="m-3 mt-5" id="members">
        <div class="row">
          <div class="col-6">
            <p class="font-weight-bold"><big>Members</big></p>
          </div>
          <div class="col-6 text-right">
            <p class="text-danger">See all</p>
          </div>
        </div>
        <div class="row bg-light mx-2 p-2">
          <div class="col-2">
            <img src="user.jpg" alt="foto" width="100%" class="rounded-circle m-3 shadow p-3 mb-5 bg-white rounded" />
          </div>
          <div class="col-10 mt-4 pl-5">
            <div class="row">
              <div class="col-12">
                <p class="text-xl font-weight-bold"><big>Organizers</big></p>
              </div>
              <div class="col-4">
                UPT. TIK Universitas Tanjungpura
              </div>
              <div class="col-8">
                10 others
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Meetups */}
      <div class="m-3 mt-5" id="past-meetups">
        <div class="row">
          <div class="col-6">
            <p class="font-weight-bold"><big>Past Meetups</big></p>
          </div>
          <div class="col-6 text-right">
            <p class="text-danger">See all</p>
          </div>
        </div>
      </div>
      <div class="row mx-2">
        <div class="col-4">
          <div class="card">
            <h5 class="card-header">28 November 2023</h5>
            <div class="card-body">
              <h5 class="card-title">#5 PontianakJS November Meetup with Mimbar Untan</h5>
              <p class="card-text">150 <span class="text-warning">went</span></p>
              <a href="#" class="btn btn-danger">View</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h5 class="card-header">28 Oktober 2023</h5>
            <div class="card-body">
              <h5 class="card-title">#5 PontianakJS Oktober Meetup with Vindes Chanel</h5>
              <p class="card-text">150 <span class="text-warning">went</span></p>
              <a href="#" class="btn btn-danger">View</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h5 class="card-header">28 September 2023</h5>
            <div class="card-body">
              <h5 class="card-title">#5 PontianakJS September Meetup with Indosiar</h5>
              <p class="card-text">150 <span class="text-warning">went</span></p>
              <a href="#" class="btn btn-danger">View</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="row mt-5">
        <div class="col-12 py-5 text-center bg-light font-weight-bold">Copyright UPT. TIK Universitas Tanjungpura 2023</div>
      </div>

    </div>
  );
}

export default App;
