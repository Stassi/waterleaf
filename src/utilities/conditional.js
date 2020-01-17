const conditional = ({
  ifFalse,
  ifTrue,
  predicate
}) => predicate()
  ? ifTrue()
  : ifFalse()

export default conditional
