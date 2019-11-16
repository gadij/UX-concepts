#UX Principles

Create a pizza ordering app in order to demonstrate good UX Desing vs. bad UX design.
this only supports small display

Previous branch: Seperating all user input forms to each module with similar context.

This branch: step_3-sign_in_with_retype_password branch, demonstrate a common issue with signing in to a new app\website, each site, when creating a profile requires a sign in process, which involves in typing a password, so next time you are in, it will know that you are you in you have the user name and password, this usually helps in creating a unique profile, customization, sales offers, privacy and many more to each user.

Design impact: This Branch demonstrate a very recent problem: retyping password in signin process, the initial idea had a good intention behind it, when you sign in to an app, and typing a password, usually you wont see the password typed rather then: *****, in order for other people not to see the password you typed when looking over your shoulder, but if you intented to type a password, lets say: 'gadiIsTheKing123', and by mistake you forgot to capitalize the 'k' thus resulting with password: 'gadiIsTheking123', when you will try to login after the sign in process, you will be blocked, and you wont understand why. Retyping a password decrease the probability of making the same mistake twice. The app will complain if your two typed passwords wont match, which is a bit annoying, since you cant 'copy paste' the first one into the second one,but its way better than not understanding why the app blocks you out.
this approach is part good and part bad, since there is a better way, which will be explained in the next branch
