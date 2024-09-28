export interface Playlist {
  id: string
  name: string
  tracks: {
    total: number
  }
  followers: {
    total: number
  }
  images: {
    url: string
    width: number
    height: number
  }[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Me 4 U',
    tracks: {
      total: 52
    },
    followers: {
      total: 1432
    },
    images: [
      {
        url: '/omi.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '2',
    name: 'Battleground',
    tracks: {
      total: 76
    },
    followers: {
      total: 5421
    },
    images: [
      {
        url: '/4u.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '3',
    name: 'Stoney (Deluxe)',
    tracks: {
      total: 16
    },
    followers: {
      total: 2789
    },
    images: [
      {
        url: '/eminem.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '4',
    name: 'TESTING',
    tracks: {
      total: 64
    },
    followers: {
      total: 1987
    },
    images: [
      {
        url: '/disco.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '5',
    name: 'Morning Motivation',
    tracks: {
      total: 32
    },
    followers: {
      total: 972
    },
    images: [
      {
        url: '/flower.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '6',
    name: 'Party Mix',
    tracks: {
      total: 57
    },
    followers: {
      total: 3045
    },
    images: [
      {
        url: '/hand.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '7',
    name: 'Workout Mix',
    tracks: {
      total: 42
    },
    followers: {
      total: 1823
    },
    images: [
      {
        url: '/house.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '8',
    name: 'Relaxation Zone',
    tracks: {
      total: 26
    },
    followers: {
      total: 645
    },
    images: [
      {
        url: '/party.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '9',
    name: 'Romantic Evening',
    tracks: {
      total: 37
    },
    followers: {
      total: 1245
    },
    images: [
      {
        url: '/OIP.webp',
        width: 640,
        height: 640
      }
    ]
  },
  {
    id: '10',
    name: 'Indie Favorites',
    tracks: {
      total: 63
    },
    followers: {
      total: 2038
    },
    images: [
      {
        url: '/sun.webp',
        width: 640,
        height: 640
      }
    ]
  }
]

export interface Song {
  id: number
  name: string
  artists: string
  duration: string
  image: string
  song_url: string
}

export const Songs: Song[] = [
  {
    "id": 1,
    "name": "Bee Gees – Night Fever",
    "artists": "Bee Gees",
    "duration": "3:28",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/beegees.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Bee+Gees+-+Night+Fever+(Official+Video).m4a"
  },
  {
    "id": 2,
    "name": "Good Times",
    "artists": "Chic",
    "duration": "8:15",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/goodtimes.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Good+Times.m4a"
  },
  {
    "id": 3,
    "name": "Disco Inferno",
    "artists": "The Trammps",
    "duration": "10:50",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/tehtramps.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Disco+Inferno.m4a"
  },
  {
    "id": 4,
    "name": "Dancing Queen",
    "artists": "ABBA",
    "duration": "3:53",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/dancingqueen.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/ABBA+-+Dancing+Queen+(Official+Lyric+Video).opus"
  },
  {
    "id": 5,
    "name": "We Are Family",
    "artists": "Sister Sledge",
    "duration": "3:30",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/sistersledge.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Sister+Sledge+-+We+Are+Family.opus"
  },
  {
    "id": 6,
    "name": "Hot Stuff",
    "artists": "Donna Summer",
    "duration": "3:49",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/donnasummer.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Hot+Stuff.opus"
  },
  {
    "id": 7,
    "name": "You're the First, the Last, My Everything",
    "artists": "Barry White",
    "duration": "4.32",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/barrywhite.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/You're+the+First%2C+the+Last%2C+my+Everything.m4a"
  },
  {
    "id": 8,
    "name": "Y.M.C.A.",
    "artists": "Village People",
    "duration": "6:13",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/ymca.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Bee+Gees+-+Night+Fever+(Official+Video).m4a"
  },
  {
    "id": 9,
    "name": "Om Shanti Om",
    "artists": "Kishore Kumar & Asha Bhosle",
    "duration": "9:05",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/omshantom.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Om+Shanti+Om+-+Kishore+Kumar+-+Rishi+Kapoor+-+Karz+%5B1980%5D.opus"
  },
  {
    "id": 10,
    "name": "Pyaar Karne Wale",
    "artists": "Shalimar",
    "duration": "4:52",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/pyarkarnewale.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Mera+Pyaar+Shalimar+-+Shalimar+_+Dharmendra+_+Zeenat+Amaan+_+R+D+Burman+_+Asha+Bhosle+-+HD+Audio.opus"
  },
  {
    "id": 11,
    "name": "Subah Hone Na De",
    "artists": "Mika Singh",
    "duration": "4:31",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/subahhonenade.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Subah+Hone+Na+De+-+Desi+Boyz+_+Full+Audio+Song+_+Akshay+Kumar+_+John+Abraham+_+Mika+Singh+_Deepika.opus"
  },
  {
    "id": 12,
    "name": "Ishq Tera Tadpave (Oh Ho Ho Ho)",
    "artists": "Sukhbir",
    "duration": "3:45",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/ohohoho.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/OH+HO+HO+HO+_+ISHQ+TERA+TADPAVE+_+SUKHBIR+_+Lyrical+(+Official+).m4a"
  },
  {
    "id": 13,
    "name": "Jimmy Jimmy Aaja Aaja",
    "artists": "Bappi Lahiri",
    "duration": "3:28",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/jimmi.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Disco+Dancer+-+Jimmi+Jimmi+Jimmi+Aaja+Aaja+Aaja+Aaja+Re+Mere+-+Parvati+Khan.m4a"
  },
  {
    "id": 14,
    "name": "Abhi Toh Party Shuru Hui Hai",
    "artists": "Badshah ",
    "duration": "3:09",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/abhitohparty.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/'Abhi+Toh+Party+Shuru+Hui+Hai'+FULL+VIDEO+Song+_+Khoobsurat+_+Badshah+_+Aastha.m4a"
  },
  {
    "id": 15,
    "name": "Jhoom Jhoom Jhoom Baba",
    "artists": "Asha Bhosle",
    "duration": "5:31",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/jhoomjhoom.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Jhoom+Jhoom+Jhoom+Baba+-+Kasam+Paida+Karne+Wale+Ki+-+Mithun+Chakraborty+-+Salma+Agha+-+Smita+Patil.m4a"
  },
  {
    "id": 16,
    "name": "Dheeme Dheeme",
    "artists": "Neha Kakkar & Tony Kakkar",
    "duration": "2:42",
    "image": "https://discofy-app-data01.s3.amazonaws.com/playlist/Images/dheemedheeme.jpeg",
    "song_url": "https://discofy-app-data01.s3.amazonaws.com/songs/songs/Dheeme+Dheeme+-+%40TonyKakkar+_+Neha+Sharma+_+Official+Music+Video.opus"
  }
]
