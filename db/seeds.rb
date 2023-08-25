puts "🌱 Seeding ..."

User.create(
    username: "johnny_test",
    password: "CartoonNetwork",
    password_confirmation: "CartoonNetwork",
    name: "Johnny Test",
    image_url: "https://static.wikia.nocookie.net/versus-compendium/images/0/01/Janny_Test.png/revision/latest?cb=20180922185847",
    height: 4.75,
    weight: 100,
    experience: "Advanced"
)

BoulderProblem.create([
  {
    name: "Tour de France (aka Firewall)",
    grade: 7,
    description: "This is a Black Mountain mega-classic. A gorgeous overhang with impeccable rock quality, wild gymnastic moves, an unforgettable topout... it's got it all. The standing start begins in the middle of the wall, goes up and left, then heads back right with crazy, unlikely body English. Then continue right to the baffling sloper topout. A very memorable climb.",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fsocalclimbing%2Fcomments%2Fahqrti%2Fblack_mountains_tour_de_france_v7%2F&psig=AOvVaw3n-PmdiQswwi8yp6bh-ESb&ust=1692993516559000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjBh7uK9oADFQAAAAAdAAAAABAN",
    location: "Black Mountain, California",
    rating: 4
  },
  {
    name: "White Rastafarian",
    grade: 2,
    description: "This problem is located on a large boulder at the Southeast end of Rock Hudson. Climb a juggy crack on an overhanging arete until it dies out 15 ft. up. Lean out left, onto the overhanging face, to a large flake. Finishes with an easy mantel 25 ft. off the deck. One of JTree's finest problems.",
    image_url: "https://pbs.twimg.com/media/DSftkoIVwAIJafU.jpg",
    location: "Joshua Tree National Park, California",
    rating: 4
  },
  {
    name: "The Hulk",
    grade: 6,
    description: "On the steep South face of the 'Happy Boulder', sit-start down and right on a juggy shelf. Steep moves lead to a left hand pinch and right hand sidepull/undercling. Make a big move up and left to the big block just below the lip (the 'Boss' hold). From here, finish either up and left or up and right, same difficulty.",
    image_url: "https://i.ytimg.com/vi/CwRctuku33A/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUChKMA8=&rs=AOn4CLC30TpWLyg40dbnmeoe1KZk6vkejg",
    location: "Bishop, California",
    rating: 3
  }
])

ClimbingSession.create(
    date: Date.new(),
    private: FALSE,
    completed: TRUE,
    boulder_rating: 4,
    notes: "Flashed it.",
    user_id: 1,
    boulder_problem_id: 1
)

puts "✅ Done seeding!"
