# KH (2027) Edition preview

The optional setup toggle is saved locally and included in shared setup QR URLs as `_kh2027`. Older URLs still load 2019 rules. This is a preview, not a claim of final 2027 faction-board fidelity. Other faction reference text remains 2019.

## Evidence and scope
GF9's [combat update](https://gamefound.com/en/projects/gf9/dune/updates/3) describes optional, noncumulative troop-dial bonuses: dial 2/pay 2/+1; dial 4/pay 4/+2; dial 8/pay 8/+3. Half dialing is removed. Leaders and Ecaz allied strength do not unlock higher spice tiers.

The preview follows the user's supplied rules for normal troops at 1, elites at 2, Sardaukar versus Fremen at 1, and Fremen receiving the chosen bonus without spice payment unless Karama'd. These exact final faction details still require verification against published boards. It does not implement unverified Emperor ally discounts or new faction-board powers. [GF9 faction update](https://gamefound.com/en/projects/gf9/dune/updates/5).

Ecaz contributions can be included/excluded on the results page, without deleting the entered count. 2019 calculations are retained when the preview is off.

## Verification and release gates
Run `npm ci && npm test`. The DOM regression suite covers combat thresholds, optional bonus, faction exceptions, legacy/new QR, state persistence, Ecaz, leader death, identical-strength leaders, Cheap Hero, Zoal, and faction switching. DOM tests are not device QA.

Before release, check layout on actual mobile browsers, QR scan round trip, offline reload/service-worker update, and Android install/signing. Verify the artifact package is `onl.mayo.dune.twa`, version code 9, version name 1.1.0, target SDK 36, and its upload certificate matches Play Console. Existing signing secrets must be present in GitHub Actions. The workflow must complete before any artifact is claimed ready.

Update Play Console's broken legacy privacy-policy URL only after the revised policy is deployed at https://dune.how/privacy_policy.html. Resolve the developer inactivity warning and verify the Console response. Production approval and Android end-to-end QA remain separate steps. No tester engagement may be invented.
