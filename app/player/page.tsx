'use client'
import Image from 'next/image'
import AlbumVinyl from '../components/AlbumVinyl'
import { playlists } from '../lib/api-response'
import { Play } from 'iconoir-react'
import { getGreeting } from '../lib/getGreeting'
import logo from '@/public/girlhack24-icon.png'
import { MusicNoteAdd } from 'iconoir-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import adp from '@/public/adp.webp'
import avande from '@/public/AVANADE.webp'
import aws from '@/public/aws.webp'
import crowd from '@/public/crowd.webp'
import fiserv from '@/public/fiserv.webp'
import github from '@/public/github.png'
import hexaware from '@/public/hexaware.webp'
import isaca from '@/public/isaca.png'
import merck from '@/public/merck.webp'
import mongodb from '@/public/mongodb.webp'
import nokia from '@/public/nokia.webp'

function initDiscoBall() {
  var t = 1;
  var radius = 50;
  var squareSize = 6.5;
  var prec = 19.55;
  var fuzzy = 0.001;
  var inc = (Math.PI - fuzzy) / prec;
  var discoBall = document.getElementById("discoBall");

  for (var t = fuzzy; t < Math.PI; t += inc) {
    var z = radius * Math.cos(t);
    var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
    var circumference = Math.abs(2 * Math.PI * currentRadius);
    var squaresThatFit = Math.floor(circumference / squareSize);
    var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
    for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
      var square = document.createElement("div");
      var squareTile = document.createElement("div");
      squareTile.style.width = squareSize + "px";
      squareTile.style.height = squareSize + "px";
      squareTile.style.transformOrigin = "0 0 0";
      squareTile.style.webkitTransformOrigin = "0 0 0";
      squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
      squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
      if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
        squareTile.style.backgroundColor = randomColor("bright");
      } else {
        squareTile.style.backgroundColor = randomColor("any");
      }
      square.appendChild(squareTile);
      square.className = "square";
      squareTile.style.webkitAnimation = "reflect 2s linear infinite";
      squareTile.style.webkitAnimationDelay = String(randomNumber(0, 20) / 10) + "s";
      squareTile.style.animation = "reflect 2s linear infinite";
      squareTile.style.animationDelay = String(randomNumber(0, 20) / 10) + "s";
      squareTile.style.backfaceVisibility = "hidden";
      var x = radius * Math.cos(i) * Math.sin(t);
      var y = radius * Math.sin(i) * Math.sin(t);
      square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
      square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
      if (discoBall)
        discoBall.appendChild(square);
    }
  }
}


function randomColor(type: any) {
  var c;
  if (type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


setTimeout(function () { initDiscoBall(); }, 1000);


export default function Player() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('https://discofy-app-data01.s3.amazonaws.com/playlist/playlists.json');

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: any = await response.json();
        setState(data);
      } catch (err: any) {
        console.log(err)
      }
    };
    fetchPlaylists();
  }, []);
  return (
    <div className="overflow-hidden w-full h-screen dark:bg-[#181818] transition-colors duration-500">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="flex font-medium pt-10 text-3xl">
          Welcome to Discofy
          <MusicNoteAdd />
        </h1>

        <div id="discoBallLight"></div>
        <div id="discoBall">
          <div id="discoBallMiddle"></div>
        </div>
        <article className="w-full h-80 bg-black text-white grid grid-cols-2 px-8 place-items-center rounded-[10px] customShadowHigh relative">
          <div className="flex flex-col gap-2">
            <h1 className="flex font-medium text-2xl">
              All about us
            </h1>
            <ul>
              <li>
                🎧 AI-Powered Music Recommendations
              </li><li>
                📻 Integrated Music Player to share Playlists & Discover New Artists
              </li>
              <li>
                🔥 Analytics for the Curious
              </li>
            </ul>
            A project submitted at GirlHacks 2024 held at New Jersey Institute of Technology
            <p className="opacity-70 text-sm">Special thanks to all the sponsors for the support!</p>
            <div className="flex items-center gap-4">
              <Image
                src={aws}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={adp}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={github}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={avande}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={crowd}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={fiserv}
                width={40}
                height={20}
                alt="aws"
              />

              <Image
                src={hexaware}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={isaca}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={merck}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={mongodb}
                width={40}
                height={20}
                alt="aws"
              />
              <Image
                src={nokia}
                width={40}
                height={20}
                alt="aws"
              />
            </div>
          </div>
          <Image
            width={420}
            height={420}
            src={logo}
            alt="Banner"
          />
        </article>
        <div className="flex items-center justify-between gap-8">
          <AlbumVinyl />
          <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-8 h-max w-[800px]">
            {state
              .map(playlist => (
                <div
                  key={playlist.id}
                  className="flex justify-between h-[100px] w-full bg-white dark:bg-[#121212] rounded-[10px] shadow-xl group relative"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={playlist.images[0].url}
                      width={100}
                      height={100}
                      alt={playlist.name}
                      className="aspect-square rounded-l-[10px]"
                    />
                    <h1 className="font-medium">{playlist.name}</h1>
                  </div>
                  <button className="mr-8 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-300">
                    <Link
                      href={`/player/playlist/${playlist.id}`}
                    >
                      <MusicNoteAdd />
                    </Link>

                  </button>
                  <div>

                  </div>
                </div>
              ))
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  )
}