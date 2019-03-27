pages:
	- index ( -> wall )
	- wall ( chat x3 | popup-success -> locked-wall )
	- locked-wall ( -> messages )
	- messages ( chat x3 | popup-fail -> close | popup-success -> success )
	- success

modals:
	- chat 1
	- chat 2
	- chat 3
	- chat 4
	- chat 5 (not troll)
	- chat 6
	- popup-success
	- popup-fail