export default function({position, current, Transition, name}) {
    return (
        <li
            // className="li
            className={current == position ? "chosen li" : "li"}
            onClick={() => {
              Transition(position);
              window.location.href = position;
              // browserHistory.push("/");
            }}
          >
            <strong>{name}</strong>
          </li>
    )
}