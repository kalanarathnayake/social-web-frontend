import { Component } from "react";
import { Carousel, initTE } from "tw-elements";
import 'tw-elements';

initTE({ Carousel });

export class Home extends Component {
  render() {
    return (
      <div>


        <div class="">
          <div class="container ">
            <div class="object-center min-h-64 relative">
              <div class="absolute top-16 text-center px-4 py-3 bg-slate-300/50 font-serif w-full">
                <h1 class="text-black font-bold text-7xl"><span class="text-blue-500 text-7 xl animate-pulse">SKILL</span>  <span className="animate-pulse"></span>   <span class="text-black-500 text-7xl animate-pulse">HOP</span><span class=""></span> </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

// export default Home;