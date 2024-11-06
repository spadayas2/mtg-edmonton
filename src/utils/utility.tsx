import classes from './util.module.css'

export const FORMATS = [
  {
    format: "STANDARD",
    deckSize: "60+",
    players: "2",
    duration: "20 mins",
    sets: "Latest Sets",
  },
  {
    format: "DRAFT",
    deckSize: "40+",
    players: "2-8",
    duration: "20 mins",
    sets: "Any",
  },
  {
    format: "SEALED",
    deckSize: "40+",
    players: "2+",
    duration: "120 mins",
    sets: "Any",
  },
  {
    format: "COMMANDER",
    deckSize: "100",
    players: "3-5",
    duration: "120 mins",
    sets: "Any",
  },
  {
    format: "PIONEER",
    deckSize: "60+",
    players: "2",
    duration: "20 min",
    sets: "Return to Ravnica+",
  },
  {
    format: "MODERN",
    deckSize: "60+",
    players: "2",
    duration: "20 min",
    sets: "Last 20 years",
  },
  {
    format: "PAUPER",
    deckSize: "60+",
    players: "2",
    duration: "20 min",
    sets: "Any",
  },
];

export function getFormatColourModuleClassName(
  eventName: string,
  type: string = "title"
) {
  if (eventName === "DRAFT")
    if (type === "store") return classes.storeDraft;
    else return classes.draft;
  if (eventName === "COMMANDER")
    if (type === "store") return classes.storeCommander;
    else return classes.commander;
  if (eventName === "STANDARD")
    if (type === "store") return classes.storeStandard;
    else return classes.standard;
  if (eventName === "SEALED")
    if (type === "store") return classes.storeSealed;
    else return classes.sealed;
  if (eventName === "PIONEER")
    if (type === "store") return classes.storePioneer;
    else return classes.pioneer;
  if (eventName === "MODERN")
    if (type === "store") return classes.storeModern;
    else return classes.modern;
    if (eventName === "PAUPER")
      if (type === "store") return classes.storePauper;
      else return classes.pauper;

  return classes.storeDraft;
}
