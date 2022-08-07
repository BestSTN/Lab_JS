function truncate (str, length) {
  if (str.length <= length) {
    return str
  }

  return str.slice(0, (length-1)) + "..."
}

truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
truncate("Hi everyone!", 20); // Hi everyone!
