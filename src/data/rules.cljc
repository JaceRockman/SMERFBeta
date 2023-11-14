(ns data.rules
  (:require [datascript.core :as ds]))

#_"Skill Checks
- base dice pool
- bonuses and penalties
- complex actions
- careful and reckless actions
- passive checks

Encounters (conditional on skill checks)
- Actions (not conditional)
- Moments (conditional on complex, careful, and reckless actions)
- Rounds (not conditional)

Damage (not conditional on other rules aside from how to roll a health check)
- Injuries
- Conditions
- Recovery

Conditions (not conditional on other rules)

Stats (not conditional on other rules)"

(defn ruleset-eid-by-title
  [db ruleset-title]
  (ffirst (ds/q '[:find ?e
                  :in $ ?ruleset-title
                  :where [?e :ruleset/title ?ruleset-title]]
                db ruleset-title)))

(defn rule-details
  [db ruleset-title]
  (ds/pull db '[*] (ruleset-eid-by-title db ruleset-title)))

(defn skill-check-rules
  [base-dice-pool-example]
  {:overview "# Overview
\tSkill checks should be made when a character’s actions have a reasonable chance of both failure and success and when failure would come at a cost. If it is impossible for a skill check to fail or to succeed, then there is nothing to check. If a skill check has a reasonable chance of both success and failure but there is no cost for the actions either way, then the character could just continue to try again until they succeed. Ultimately, it is up to the GM’s discretion when a skill check should be called for. When a skill check is called for, you will use your character’s stats to determine the check’s base dice pool. The base dice pool may then be modified by bonuses and penalties. Once the base dice pool has been modified, then the dice are rolled and the results are compared to a target number which represents the difficulty of the actions you are taking."
   :base-dice-pool "# Base Dice Pool
\tWhen a check is called for, the GM will determine which of your stats is most relevant to the task at hand and that will determine your base dice pool. For example, if you are trying to climb a cliffside, the GM may ask for a check using your coordination skill. If your coordination skill is 2d8, then your base dice pool would be two 8-sided dice."
   :benefits-and-detriments "# Benefits and Detriments
\tCircumstances and resources can affect skill checks beneficially or detrimentally. Beneficial effects grant dice bonuses and flat bonuses while detrimental effects inflict dice penalties and flat penalties. Dice bonuses and dice penalties alter your chances of success by increasing or decreasing the number of dice you roll. They are represented in the format of \"+1d\" for bonuses and \"-1d\" for penalties. On the other hand, flat penalties alter the limits of what you can accomplish by increasing or decreasing the result of the roll. They are represented in the format of \"+1\" or \"-1\". When bonuses and penalties of the same type are applied to a check, they cancel each other out and the final number is then applied to the dice pool. If a dice penalty would cause you to roll zero dice, instead, roll one die of the next size down.\n\tSometimes bonuses and penalties will be applied to a check after you have rolled the dice but before the check is resolved. If a dice bonus is applied after you roll your dice but before the roll is resolved, then roll the bonus dice and compare the result of the dice pool in question to your bonus dice result and take the higher of the two. If a dice penalty is inflicted after you roll all of your dice but before the roll is resolved, then roll the penalty dice one at a time and compare the result to the previous result. The die that is numerically closest to the penalty die you rolled is removed from the roll, rounding unfavorably, and then repeat this process with any remaining penalty dice. If you have penalty dice remaining when there is only one die left in the dice pool in question, then roll the rest of the penalty dice and take the lowest result."
   :complex-actions "# Complex Actions
\tAfter bonuses and penalties are applied but before the roll is made, you can choose how complex you would like your action to be. Actions are made complex by splintering the base dice pool into multiple fragmentary pools. Each of these fragmentary pools are counted as separate results for the purposes of resolving the check. This allows you to attempt multiple endeavors where you would usually only be able to attempt one. A common example of this is making multiple attacks against an enemy or attacking different enemies simultaneously. If you choose to splinter your base dice pool, each of the fragmentary dice pools must contain at least two dice. Some resources place higher limitations on the size of the fragmentary dice pools you can create. Flat bonuses and penalties must be distributed as evenly as possible amongst the fragmentary dice pools."
   :careful-and-reckless-actions "# Careful and Reckless Actions
\tThe final modification that can be made to a dice pool before rolling is choosing to be careful or reckless. If you choose to act recklessly, then two dice of the same size in the same dice pool may be combined into a single die of the next highest size. On the other hand, if you choose to act carefully, then a single die may be split into two dice of the next smallest size. You can choose your degree of carefulness or recklessness by splitting or combining only some of the dice in the dice pool. In this case, you will end up with a dice pool containing dice of different sizes. This makes no difference in the roll. You will still simply roll all of the dice in the pool and take the highest result."
   :passive-checks "# Passive Checks
\tPassive checks may be used by the GM to resolve situations where your character’s stats are relevant but your character doesn't need to do anything to resolve the situation. Checks to determine your character's level of knowledge on a topic or checks to notice something in your surroundings when you aren’t searching will commonly be made as passive checks. The GM will still determine a target number and choose which stats are most relevant, however, instead of modifying that dice pool and rolling those dice, you will add together the following three values to determine the result: half of the size of the dice that make up the dice pool, the number of dice in the dice pool, and the net value of all of the bonuses and penalties. This result cannot exceed the cumulative total of the size of dice that make up the dice pool and the net value of your flat bonuses and penalties. Once the result is determined, it is compared to the target number determined by the GM as usual."})

(def encounter-rules
  {:overview "# Overview
\tAn encounter is a scene that is centered around a goal and obstacle where many of your actions require skill checks. One of the clearest examples of an encounter is combat. During combat, the most basic goal is survival, the obstacle to that goal is the creatures or characters that are trying to kill you. Most of your actions will relate to attacking, defending, or positioning which all frequently require skill checks. Other examples of scenes that may be counted as encounters are chase scenes, social functions, survivalist challenges, heists, and investigations. Encounters are the most structured portions of an adventure. Your GM may decide to run some encounters more casually just like they would any other part of the adventure, however, if they want to track the order of actions more carefully, then they may use the following structure."
   :actions "# Actions
\tThere are two types of actions: setup actions and engagement actions. Setup actions are small adjustments that don’t take much focus, time, or effort. Engagement actions are where the bulk of the encounter takes place and they will usually require much more from you and have a risk of failure. Generally speaking, if an action requires a check, then it is likely an engagement action and if an action only requires a passive check or no check at all, then it is likely a setup action. Engagement actions are further divided into initiations and reactions and you will most often take one of each. Initiations require you to have focus on a target, usually a creature, object, or zone, while reactions can only be used when you are the target, or in the target area, of another creature's initiation. Listed below are some examples of the two kinds of actions."
   :moments "# Moments
\tAfter the setup phase of a round is complete and initial bonuses and penalties have been added to everyone’s base dice pools, the first moment of the engagement phase begins. When a moment begins, anyone who would like to act in that moment may commit dice to the moment by setting them aside. Everyone who has chosen to commit dice rolls them at the same time. The dice that have been rolled are resolved in the following manner:\n\t1. The dice pools with the fewest dice are resolved first.\n\t2. If two dice pools have the same number of dice, then the dice pool with the larger sized dice goes first.\n\t3. If the dice pools are identical, then the Players action is resolved first.\n This means that modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be resolved. Once all of the rolls committed to a moment have been resolved, the next moment of the round begins and everyone who has dice remaining may choose to commit them to the next moment following the same rules as in the prior moment."
   :rounds "# Rounds
\tThe in-game duration of a round depends on the encounter you are involved in. In the case of small scale combat, a round will usually take about five to ten seconds, whereas in something like a social encounter, a round may take twenty minutes or an hour or even longer. Rounds are made up of two phases: the setup phase and the engagement phase. During the setup phase, creatures will have two setup actions that they can use to prepare themselves for the engagements that are to come. This phase will begin with everyone either declaring their current focus or spending a setup action to take the focus action, starting with the Game Master. If you already have focus on a creature, object, or location, you do not need to take the focus action again to maintain that focus, however, you can only maintain focus on one creature, object, or location at a time. You can also only focus a target if it is within line of sight and you immediately lose focus on your target once it is no longer in line of sight. Once everyone has declared their focus, then everyone is given the opportunity to use their remaining setup actions.\n\tAfter the setup phase ends, the first moment of the engagement phase begins. During the engagement phase, you will have two engagement actions which you can use to attempt to overcome the obstacles you have focused. You may take additional setup actions during the engagement phase as part of your engagement actions, however, each one of these setup actions inflicts a -1d penalty on both of your engagement actions. This penalty is applied even if you did not use either of your two setup actions in the setup phase. You may sacrifice one of your engagement actions to prevent these penalties from being applied to your other engagement action. You cannot take more than six setup actions in a round and you can’t take more than two setup actions in a moment. This phase will usually involve traversing significant obstacles by climbing, swimming, jumping, etc., using items, attacking and defending, or various forms of persuasion. The round ends once all of the engagement actions have been resolved or when a moment passes where no dice were rolled for engagement actions."})

(def damage-rules
  {:overview "# Overview
\tBoth in and out of encounters, your character will have to react to events around them in an attempt to prevent harm to themself. Often times, when these reactions fail, your character will take damage. This damage is tracked separately for each of the four domains: physical, spiritual, mental, and social. As damage accumulates in each of the domains, you will be inflicted with more and more serious conditions."
   :injuries "# Injuries
\tIf an attack targets you and the result is equal to or greater than your reaction, then you take a minor injury. If the attack roll is equal to or greater than the reaction roll + 3, then you take a major injury. When you are inflicted with an injury, record the severity of the injury and the domain in which it was inflicted. It may also help to keep a running total of the points of damage you have in each domain. Minor injuries inflict one point of damage while major injuries inflict two points of damage."
   :conditions "# Conditions
\tThere are three conditions that can apply to each domain that are inflicted on your character as they take increasing numbers of injuries: Wounded, Incapacitated, and Dead. You will make health checks to determine when these conditions are applied and the health check for each domain is that domain's continuation skill. If you receive an injury in a domain and the new total number of injuries exceeds half of the passive result of your health check rounded favorably, then you become inflicted with the Wounded condition in that domain. If you are inflicted with the Wounded condition and you take further damage in that domain, you must make a health check for that domain where the target number is equal to the new damage total. If your health check fails, then you become inflicted with the Incapacitated condition in that domain. If at any point, the total damage in a domain exceeds your maximum possible roll, then you are inflicted with the final condition in that domain - Dead. Whenever your wounds heal, look at your most severe condition in that domain. If you rolled to receive that condition, then roll a health check now where the target number is equal to your new damage total. If you succeed, then remove the condition. If the condition was received as a result of passing a threshold, then compare your new damage total to the threshold. If it is equal to or lesser than the damage threshold, then remove the condition. If inflicted with the Death condition in the Physical, Spiritual, or Mental domain, your character is no longer playable unless there is some process or item that specifically reverses the condition. The Death condition in the Social domain is relative to the circumstances in which it was acquired and so your character is still playable, however, the individuals that you are “dead to” so to speak may never want to interact with you again or they may become hostile to you."
   :recovery "# Recovery
\tMinor injuries will heal naturally after 2 days while major injuries will heal naturally after 1 week. You may come across items or techniques that can be used to heal injuries quicker than through natural processes."})

(def condition-list
  {:wounded "# Wounded
## Effect
As a result of the injuries you have accumulated, your performance in a particular domain has diminished. While wounded, a -1d penalty is applied to all checks made in the domain you are wounded in.
## Duration
This condition lasts until the total injuries in the relevant domain are equal to or lower than the threshold determined by that domain's health check."
   :incapacitated "# Incapacitated
## Effect
You have accumulated enough injuries that your character is no longer in control of their body, mind, spirit, or reputation. When this condition is inflicted in the physical, spiritual, or mental domain, your character becomes unconscious, despondent, or unstable, respectively. You have no control over your character in any of these circumstances. In the case of social incapacitation, people may avoid associating with you or may ignore you completely.
## Duration
Whenever your wounds heal, make a health check where the target number is your new damage total. If you succeed, then this condition is removed." 
   :dead "# Dead
## Effect
You have accumulated more injuries than your body, mind, spirit, or reputation can handle. When this condition is inflicted in the physical, spiritual, or mental domain, the injuries accumulated in those domains no longer heal naturally over time. In the case of the social domain, your relationships with specific individuals or groups may be permanently severed and trying to interact with them may cause them to become hostile.
## Duration
Unless a certain circumstance, process, or item says otherwise, this condition is permanent."
   :exhausted "# Exhausted
## Effect
Whether through over-exertion, sickness, or some other unfortunate circumstance, you have become exhausted and your overall capabilities are diminished. This condition can be applied any number of times adding additional levels of exhaustion. Each level of exhaustion inflicts a -1d penalty on all of your checks.
## Duration
Six hours of uninterrupted sleep removes one level of exhaustion."
   :surprised "# Surprised
## Effect
Events have unfolded that were so unexpected that it takes your mind a bit to catch up. You cannot take any actions while surprised.
## Duration
The surprise fades away after a few seconds."
   :blinded "# Blinded
## Effect
Some damage or barrier prevents you from seeing. Actions that depend on your sense of sight will receive penalties as determined by the Game Master.
## Duration
Your sense of sight returns once the barrier is removed or damage healed."
   :deafened "# Deafened
## Effect
Some damage or barrier prevents you from hearing. Actions that depend on your sense of hearing will receive penalties as determined by the Game Master.
## Duration
Your sense of hearing returns once the barrier is removed or damage healed."
   :constrained "# Constrained
## Effect
You have become tangled, tied, or grappled and your movement is restricted. Actions that depend on your ability to move will receive penalties as determined by the Game Master.
## Duration
Your freedom of movement returns when the restraints are removed."
   :frightened "# Frightened
## Effect
Your instinctual desire to preserve your life and well-being take over in the face of great danger. You cannot move closer to where you believe the source of your fear is.
## Duration
This effect lasts until the source of your fear takes a major wound or until you deal any damage to it."})

(def stats-list
  {:physical "# Physical
The Physical stat represents a creature's skill at coordinating their physical motions, the speed of their reflexes, and the degree to which they can endure physical pain or exhaustion. A creature with a high Physical stat will hit harder, react faster, and last longer while engaging in physical activity."
   :coordination "# Coordination
Coordination represents a creature's physical strength, flexibility, and control. A creature with high coordination will hit harder and faster and be able to perform impressive feats of athleticism and acrobatics."
   :reflexes "# Reflexes
Reflexes represents the speed and accuracy of a creature's reactions. A creature with high reflexes will be able to defend themself from incoming attacks much more reliably."
   :endurance "# Endurance
Endurance represents how much of a beating a creature can take as well as their resistance to sickness, disease, and exhaustion. A creature with high endurance will manage to survive where most other would not."
   :might "# Might"
   :finesse "# Finesse"
   :fortitude "# Fortitude"

   :spiritual "# Spiritual
The Spiritual stat represents a creature's ability to exert their will upon the world, respond instinctively to adapting circumstances, and persevere in the face of trials all while staying true to themself. If applicable to the setting, the Spiritual stat is often the stat that is tied to supernatural abilities. A creature with a high spiritual will more easily act in accordance with their principles and not lose themself to the will of others or to the manipulating forces of magic."
   :exertion "# Exertion
Exertion represents the strength of a creature's sense of self. A creature with high exertion is capable of handling enormous amounts of aethereal energy without fear of being consumed by it."
   :instinct "# Instinct
Instinct represents the strength and reliability of a creature's gut reactions. A creature with high instinct is very sensitive to the constantly shifting aether and are able to block out or reinforce the magic that touches their spirit."
   :perseverance "# Perseverance
Perseverance represents a creature's ability to maintain their sense of self in the face of doubt and temptation. A creature with high perseverance is able to absorb large amounts of foreign aethereal energy without losing themself to the chaos."
   :ambition "# Ambition"
   :discipline "# Discipline"
   :dedication "# Dedication"

   :mental "# Mental
The Mental stat represents a creature's ability to concentrate on a task, recognize patterns and trends, and comprehend the underlying principles of systems. A creature with a high Mental stat is more observant, knowledgable, and learns quickly."
   :concentration "# Concentration
Concentration represents a creature's ability to focus on a single task and avoid distractions. A creature with high concentration is able to accomplish more impressive feats with greater efficiency."
   :recognition "# Recognition
Recognition represents a creature's attention to detail. A creature with high recognition will often be able to notice the small things that others find insignificant. They are attentive to their surroundings and usually have great memories."
   :comprehension "# Comprehension
Comprehension represents a creature's ability to absorb and retain information. A creature with high comprehension is better able to understand the underlying principles of that which they are learning often causing them to pick up skills quickly and can make them great teachers."
   :intellect "# Intellect"
   :intuition "# Intuition"
   :stability "# Stability"
   
   :social "# Social
The Social stat represents a creatures ability to persuade others, the level of insight they have into other creatures' motivations and thoughts, and the number and strength of connections they have to individuals, groups, and organizations. A creature with a high Social stat will more easily be able to bring others to their cause whether through honest persuasion or lies and deceit."
   :persuasion "# Persuasion
Persuasion represents a creature's ability to sway the dispositions of others through charm, intimidation, or deception. A creature with high persuasion is able to get what they want from people without resorting to violence."
   :insight "# Insight
Insight represents how well a creature picks up on the many unspoken facets of a social environment. A creature with high insight can often discern the true motives and character of those they are interacting with."
   :connections "# Connections
Connections represents how many relationships and affiliations a creature has, how deep those connections run, and how good they are at calling upon those connections for favors. A creature with high connections always knows a guy who knows a guy whether that is through a membership in a group, a trade deal they made years ago, or simply a friend they met throughout their journeys."
   :presence "# Presence"
   :wit "# Wit"
   :poise "# Poise"})

(def simple-ruleset
  [{:ruleset/title "Simple Ruleset"
    :ruleset/skill-check-overview (:overview (skill-check-rules nil))
    :ruleset/skill-check-base-dice-pool (:base-dice-pool (skill-check-rules nil))
    :ruleset/skill-check-benefits-and-detriments (:benefits-and-detriments (skill-check-rules nil))
    :ruleset/skill-check-passive-checks (:passive-checks (skill-check-rules nil))
    :ruleset/encounter-overview (:overview encounter-rules)
    :ruleset/encounter-actions (:actions encounter-rules)
    :ruleset/encounter-moments (:moments encounter-rules)
    :ruleset/encounter-rounds (:rounds encounter-rules)
    :ruleset/damage-overview (:overview damage-rules)
    :ruleset/damage-injuries (:injuries damage-rules)
    :ruleset/damage-conditions (:conditions damage-rules)
    :ruleset/damage-recover (:recovery damage-rules)
    :ruleset/conditions-wounded (:wounded condition-list)
    :ruleset/conditions-incapacitated (:incapacitated condition-list)
    :ruleset/conditions-dead (:dead condition-list)
    :ruleset/conditions-exhausted (:exhausted condition-list)
    :ruleset/conditions-surprised (:surprised condition-list)
    :ruleset/conditions-blinded (:blinded condition-list)
    :ruleset/conditions-deafened (:deafened condition-list)
    :ruleset/conditions-constrained (:constrained condition-list)
    :ruleset/conditions-frightened (:frightened condition-list)
    :ruleset/stats-physical (:physical stats-list)
    :ruleset/stats-spiritual (:spiritual stats-list)
    :ruleset/stats-mental (:mental stats-list)
    :ruleset/stats-social (:social stats-list)}])
