import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArtistDetails } from "./components/ArtistDetails";
import { Home } from "./components/Home";
// import Artist from "./components/Artist";
// import './tailwind.output.css';
// const ArtistList = [
//  { name: 'Bruno Mars', nationality: 'American', age: 20 },
//  { name: 'Adele', nationality: 'English', age: 21 },
//  { name: 'Michael Jackson', nationality: 'American', age: 19 },
//  { name: 'Taylor Swift', nationality: 'American', age: 19 },
//  { name: 'Drake', nationality: 'Canadian', age: 19 },
// ];
const ArtistList = [
  {
    id: 1,
    name: "Bruno Mars",
    slug: "bruno-mars",
    nationality: "American",
    age: 20,
  },
  { id: 2, name: "Adele", slug: "adele", nationality: "English", age: 21 },
  {
    id: 3,
    name: "Michael Jackson",
    slug: "michael-jackson",
    nationality: "American",
    age: 19,
  },
  {
    id: 4,
    name: "Taylor Swift",
    slug: "taylor-swift",
    nationality: "American",
    age: 19,
  },
  {
    id: 5,
    name: "Drake",
    slug: "drake",
    nationality: "Canadian",
    age: 19,
  },
];
const SongList = [
  {
    lyrics: `(Ooh, ooh-oh, oh)
    (I think I know, whoa-oh)
    
    I'll touch that fire for you
    I do that three four times again, I testify for you
    I told that lie, I'd kill that bitch
    I do what all of them around you scared to do, I'm not
    Long as you juggin' out here for me, I got it
    Mobbin', schemin', lootin', hide your bodies
    Long as you dreamin' 'bout me, ain't no problem
    I don't got nobody, just with you right now
    Tell the truth, I look better under you
    
    I can't lose when I'm with you
    How can I snooze and miss the moment?
    You just too important
    Nobody do body like you do
    I can't lose when I'm with you
    I can't just snooze and miss the moment
    You just too important
    Nobody do body like you do, you do`,
    composer: "Deep Patel",
    producer: "Meet Patel",
    productionDate: "1-1-2024",
    awards: "Gold",
    artistId: 1,
  },
  {
    lyrics: `You say, "I don't understand," and I say, "I know you don't"
    We thought a cure would come through in time, now, I fear it won't
    Remember lookin' at this room, we loved it 'cause of the light
    Now, I just sit in the dark and wonder if it's time
    
    Do I throw out everything we built or keep it?
    I'm getting tired even for a phoenix
    Always risin' from the ashes
    Mendin' all her gashes
    You might just have dealt the final blow
    
    Stop, you're losin' me
    Stop, you're losin' me
    Stop, you're losin' me
    I can't find a pulse
    My heart won't start anymore
    For you
    'Cause you're losin' me
    
    Every mornin', I glared at you with storms in my eyes
    How can you say that you love someone you can't tell is dyin'?
    I sent you signals and bit my nails down to the quick
    My face was gray, but you wouldn't admit that we were sick`,
    composer: "Deep Patel",
    producer: "Meet Patel",
    productionDate: "1-1-2024",
    awards: "Gold",
    artistId: 3,
  },
  {
    lyrics: `(Ooh, ooh-oh, oh)
    (I think I know, whoa-oh)
    
    I'll touch that fire for you
    I do that three four times again, I testify for you
    I told that lie, I'd kill that bitch
    I do what all of them around you scared to do, I'm not
    Long as you juggin' out here for me, I got it
    Mobbin', schemin', lootin', hide your bodies
    Long as you dreamin' 'bout me, ain't no problem
    I don't got nobody, just with you right now
    Tell the truth, I look better under you
    
    I can't lose when I'm with you
    How can I snooze and miss the moment?
    You just too important
    Nobody do body like you do
    I can't lose when I'm with you
    I can't just snooze and miss the moment
    You just too important
    Nobody do body like you do, you do`,
    composer: "Deep Patel",
    producer: "Meet Patel",
    productionDate: "1-1-2024",
    awards: "Gold",
    artistId: 1,
  },
  {
    lyrics: `And the air is thick with loss and indecision
    I know my pain is such an imposition
    Now, you're runnin' down the hallway
    And you know what they all say
    You don't know what you got until it's gone
    
    Stop, you're losin' me
    Stop, you're losin' me
    Stop, you're losin' me
    I can't find a pulse
    My heart won't start anymore
    For you
    'Cause you're losin' me
    'Cause you're losin' me
    Stop (stop) 'cause you're losin' me
    
    My heart won't start anymore ('cause you're losin' me)
    My heart won't start anymore ('cause you're losin' me)
    
    How long could we be a sad song
    'Til we were too far gone to bring back to life?
    I gave you all my best me's, my endless empathy
    And all I did was bleed as I tried to be the bravest soldier
    Fighting in only your army
    Frontlines, don't you ignore me
    I'm the best thing at this party
    (You're losin' me)
    And I wouldn't marry me either
    A pathological people pleaser
    Who only wanted you to see her
    And I'm fadin', thinkin'
    
    "Do something, babe, say something" (say something)
    "Lose something, babe, risk something" (you're losin' me)
    "Choose something, babe, I got nothing (got nothing)
    To believe
    Unless you're choosin' me"
    
    You're losin' me
    Stop (stop, stop), you're losin' me
    Stop (stop, stop), you're losin' me
    I can't find a pulse
    My heart won't start anymore`,
    composer: "Deep Patel",
    producer: "Meet Patel",
    productionDate: "1-1-2024",
    awards: "Gold",
    artistId: 2,
  },
  {
    lyrics: `Look, I was gonna go easy on you and not to hurt your feelings
    But I'm only going to get this one chance
    Something's wrong, I can feel it (Six minutes, Slim Shady, you're on)
    Just a feeling I've got, like something's about to happen, but I don't know what
    If that means, what I think it means, we're in trouble, big trouble,
    And if he is as bananas as you say, I'm not taking any chances
    You were just what the doctor ordered
    
    I'm beginning to feel like a Rap God, Rap God
    All my people from the front to the back nod, back nod
    Now who thinks their arms are long enough to slap box, slap box?
    They said I rap like a robot, so call me Rapbot
    
    But for me to rap like a computer must be in my genes
    I got a laptop in my back pocket
    My pen'll go off when I half-cock it
    Got a fat knot from that rap profit
    Made a living and a killing off it
    Ever since Bill Clinton was still in office
    With Monica Lewinsky feeling on his nut-sack
    I'm an MC still as honest
    But as rude and indecent as all hell syllables, killaholic (Kill 'em all with)
    This slickety, gibbedy, hibbedy hip hop
    You don't really wanna get into a pissing match with this rappidy rap
    Packing a Mac in the back of the Ac, pack backpack rap, yep, yackidy-yac
    The exact same time I attempt these lyrical acrobat stunts while I'm practicing`,
    composer: "Deep Patel",
    producer: "Meet Patel",
    productionDate: "1-1-2024",
    awards: "Gold",
    artistId: 2,
  },
];
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-details/:id" element={<ArtistDetails />} />
      </Routes>
    </>
  );
};

export default App;
