/* Nav elements */

function include_header() {
    document.getElementById("header").innerHTML = '<object type="text/html" data="header.html" ></object>';
}

function include_footer() {
    document.getElementById("footer").innerHTML = '<object type="text/html" data="footer.html" ></object>';
}

/* Mobile hamburger menu */

function showHamburgerOverlay() {
    // Show hamburger menu.
    document.getElementById("hamburger-overlay").style.display = "flex";
    document.getElementById("hamburger-links").style.display = "flex";

    // Disable scrolling.
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function hideHamburgerOverlay() {
    // Hide hamburger menu.
    document.getElementById("hamburger-overlay").style.display = "none";
    document.getElementById("hamburger-links").style.display = "none";

    // Enable scrolling.
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
}

/* News functions */

function showPictureOverlay(object) {
    // Disable scrolling.
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";

    // Show image overlay and caption from given object that called click event.
    document.getElementById("img-overlay").src = object.src;
    document.getElementById("caption-overlay").innerHTML = object.alt;
    document.getElementById("picture-overlay").style.display = "flex";
    document.getElementById("picture-links").style.display = "flex";
}

function hidePictureOverlay() {
    // Enable scrolling.
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";

    // Hide image overlay.
    document.getElementById("picture-overlay").style.display = "none";
    document.getElementById("picture-links").style.display = "none";
}

function scrollToTop() {
    // Go to the top of the screen.
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Events page functions */

function bookEvent(entry) {
    alert("Please log in if you wish to book for an event.");
    window.location.replace('membership.html');
}

function eventFilter(entry) {
    // Search bar element in Events page.
    searchBar = document.getElementById("search-bar");
    // Set table value.
    searchBar.value = entry;

    // Perform a search.
    eventSearch();

    // Table of events.
    eventTable = document.getElementById("event-table");
    eventTable.scrollIntoView();
    window.scrollBy(0, -200);
}

// Seek for matches in an event table using the value in the search bar.
function eventSearch() {
    var searchBar, eventTable, results, tags;

    // Search bar element in Events page.
    searchBar = document.getElementById("search-bar");
    // Table of events.
    eventTable = document.getElementById("event-table");
    // Table of events.
    queryCaption = document.getElementById("query-caption");

    // Get the tags of the table: event, date and destination.
    tags = eventTable.getElementsByTagName("tr");
    // We can do this to make search case-insensitive.
    results = searchBar.value.toLowerCase();

    // Iterate through all the items in the table.
    for (var i = 0; i < tags.length; i++) {
        // To be used as Boolean values.
        var event, date, destination;

        // Get all table elements according to tag.
        event = tags[i].getElementsByTagName("td")[0];
        date = tags[i].getElementsByTagName("td")[1];
        destination = tags[i].getElementsByTagName("td")[2];

        // Check if event, date and destination mismatch. If not any, hide the result.
        if (event || date || destination) {
            if (event.textContent.toLowerCase().indexOf(results) > -1) {
                tags[i].style.display = "";
            } else if (date.textContent.toLowerCase().indexOf(results) > -1) {
                tags[i].style.display = "";
            } else if (destination.textContent.toLowerCase().indexOf(results) > -1) {
                tags[i].style.display = "";
            } else {
                tags[i].style.display = "none";
            }
        }
    }

    // Easter Egg - if the discount code is entered in the Events page, agree with the statement.
    if (results == "el0n1sg0d") {
        document.getElementById("top-text").innerHTML = "Yes.";
    } else {
        document.getElementById("top-text").innerHTML = "Seek your future.";
    }

    // Show number of matches found if searching, otherwise show original text.
    if (results == "") {
        queryCaption.innerHTML = "ALL UPCOMING EVENTS";
    } else {
        var resultHits = $('tr:visible').length - 1;
        queryCaption.innerHTML = "Searching for \"" + results + "\": " + resultHits + " matches found";
    }
}

/* Membership page functions */

function memRegistration() {
    // No sign-ups.
    alert("Registration is currently closed.");
}

function memPawnHover() {
    // Message for hovering over pawn.
    document.getElementById("join-text").innerHTML = "Small beginnings.";
}

function memRookHover() {
    // Message for hovering over rook.
    document.getElementById("join-text").innerHTML = "A sizable upgrade.";
}

function memKingHover() {
    // Message for hovering over king.
    document.getElementById("join-text").innerHTML = "There can only be one.";
}

function memLogin() {
    // Login is placeholder, indicate wrong for all attempts - no backend after all.
    document.getElementById("top-text").innerHTML = "Invalid credentials.";
    document.getElementById("user-bar").value = "";
    document.getElementById("pass-bar").value = "";
    document.getElementById("top-text").style.color = "#ff5237";

    // After two seconds, restore the original text and color.
    setTimeout(function() {
        document.getElementById("top-text").innerHTML = "Already an ISS member?";
        document.getElementById("top-text").style.color = "#ffffff";
    }, 2000);
}

function memDiscount() {
    // Search bar element in Events page.
    discountBar = document.getElementById("discount-bar");

    // We can do this to make search case-insensitive.
    results = discountBar.value.toLowerCase();

    // If discount code applied, lower the prices on all tier boxes. Otherwise, restore prices and text.
    if (results == "el0n1sg0d") {
        document.getElementById("join-text").innerHTML = "Promotion auto-applied.";

        document.getElementById("prom1").innerHTML = "$2,249/mo";
        document.getElementById("prom2").innerHTML = "$8,999/mo";
        document.getElementById("prom3").innerHTML = "$44,999/mo";

        document.getElementById("prom1").style.color = "#90ee90";
        document.getElementById("prom2").style.color = "#90ee90";
        document.getElementById("prom3").style.color = "#90ee90";
    } else if (results == "") {
        document.getElementById("join-text").innerHTML = "Looking to join?";

        document.getElementById("prom1").innerHTML = "$2,499/mo";
        document.getElementById("prom2").innerHTML = "$9,999/mo";
        document.getElementById("prom3").innerHTML = "$49,999/mo";

        document.getElementById("prom1").style.color = "#ffffff";
        document.getElementById("prom2").style.color = "#ffffff";
        document.getElementById("prom3").style.color = "#ffffff";
    } else {
        document.getElementById("join-text").innerHTML = "Enter a valid code.";

        document.getElementById("prom1").innerHTML = "$2,499/mo";
        document.getElementById("prom2").innerHTML = "$9,999/mo";
        document.getElementById("prom3").innerHTML = "$49,999/mo";

        document.getElementById("prom1").style.color = "#ffffff";
        document.getElementById("prom2").style.color = "#ffffff";
        document.getElementById("prom3").style.color = "#ffffff";
    }
}

/* Games page functions - show scenarios don't repeat once completed, so check for ✓ */

function showBattleshipScenario() {
    // Show prompt and alters overlay for Battleship scenario. See events for mapping and details.
    if (document.getElementById("status-battleship").innerHTML != "✓") {
        document.getElementById("scenario-overlay").style.display = "flex";
        document.getElementById("scenario-elements").style.display = "flex";
        document.getElementById("scenario-name").innerHTML = "BATTLESHIP SCENARIO";
        document.getElementById("scenario-description").innerHTML = "Lord Elon has a special superpower that he likes to exercise fairly during battleship games: heat vision. With his eyes that appear human, he will see through your board and instantly nail your ships without miss. Win this commemorative game in which Elon beat one of our masters, Tracy, so proudly and fairly at battleship by clicking on the position of his last great turn.";
        document.getElementById("scenario-image").src = "images/musk_battleship.png";
        document.getElementById("scenario-image").useMap = "#battleshipAnswer";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
}

function showChessScenario() {
    // Show prompt and alters overlay for Chess scenario. See events for mapping and details.
    if (document.getElementById("status-chess").innerHTML != "✓") {
        document.getElementById("scenario-overlay").style.display = "flex";
        document.getElementById("scenario-elements").style.display = "flex";
        document.getElementById("scenario-name").innerHTML = "CHESS SCENARIO";
        document.getElementById("scenario-image").src = "images/musk_chess.png";
        document.getElementById("scenario-description").innerHTML = "After a long match against Andrew, Elon was able to exploit his opponent's psychological weaknesses, forcing them to make a blunder on their previous move before the chessboard came to be this way. Click on the position that led Musk to win his 1000th checkmate.";
        document.getElementById("scenario-image").useMap = "#chessAnswer";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
}

function showCheckersScenario() {
    // Show prompt and alters overlay for Checkers scenario. See events for mapping and details.
    if (document.getElementById("status-checkers").innerHTML != "✓") {
        document.getElementById("scenario-overlay").style.display = "flex";
        document.getElementById("scenario-elements").style.display = "flex";
        document.getElementById("scenario-name").innerHTML = "CHECKERS SCENARIO";
        document.getElementById("scenario-image").src = "images/musk_checkers.png";
        document.getElementById("scenario-description").innerHTML = "Truth be told, Musk has no knowledge of checkers. Which is why this question is a mere trivia - click on a tile to perform an \"Old Faithful\", a popular starting move in the game, which not shortly afterwards led Elon to obliterate Christina's play with the AI that he so fairly made and competed with.";
        document.getElementById("scenario-image").useMap = "#checkersAnswer";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
}

function showTicTacToeScenario() {
    // Show prompt and alters overlay for Tic-Tac-Toe scenario. See events for mapping and details.
    if (document.getElementById("status-tictactoe").innerHTML != "✓") {
        document.getElementById("scenario-overlay").style.display = "flex";
        document.getElementById("scenario-elements").style.display = "flex";
        document.getElementById("scenario-name").innerHTML = "TIC-TAC-TOE SCENARIO";
        document.getElementById("scenario-image").src = "images/musk_tictactoe.png";
        document.getElementById("scenario-description").innerHTML = "Nick was playing as X in this game, and was just about to earn his freedom and return back to Earth when he was interrupted making his last move. But afterwards, Elon started to debauch, \"Why are you hitting yourself, why are you hitting yourself?\", multiple times. Click on Elon's winning move that kept Nick in the ISS family for twenty more years.";
        document.getElementById("scenario-image").useMap = "#tictactoeAnswer";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
}

function hideScenario() {
    // Hide the overlay and enable scrolling.
    document.getElementById("scenario-overlay").style.display = "none";
    document.getElementById("scenario-elements").style.display = "none";
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
}

function battleshipSuccess() {
    // For all success messages, hide overlay, indicate game is complete and check if all games are complete.
    hideScenario();
    document.getElementById("status-battleship").innerHTML = "✓";
    testAllDone();
}

function chessSuccess() {
    // For all success messages, hide overlay, indicate game is complete and check if all games are complete.
    hideScenario();
    document.getElementById("status-chess").innerHTML = "✓";
    testAllDone();
}

function checkersSuccess() {
    // For all success messages, hide overlay, indicate game is complete and check if all games are complete.
    hideScenario();
    document.getElementById("status-checkers").innerHTML = "✓";
    testAllDone();
}

function tictactoeSuccess() {
    // For all success messages, hide overlay, indicate game is complete and check if all games are complete.
    hideScenario();
    document.getElementById("status-tictactoe").innerHTML = "✓";
    testAllDone();
}

function testAllDone() {
    // If all tests are complete with a check, show the discount code.
    done1 = (document.getElementById("status-battleship").innerHTML == "✓");
    done2 = (document.getElementById("status-chess").innerHTML == "✓");
    done3 = (document.getElementById("status-checkers").innerHTML == "✓");
    done4 = (document.getElementById("status-tictactoe").innerHTML == "✓");

    if (done1 && done2 && done3 && done4) {
        // Easter egg
        document.getElementById("top-text").innerHTML = "Who dares challenge me.";
        // Discount code message
        alert("Congratulations! You have solved all of our Elon's Greatest challenge scenarios.\n\nIf you're not up here in captivity - I mean, not dancing in festivity - then come join us at the ISS!\n\nA 10% discount will apply to your membership with the following code: EL0N1SG0D.")
            // Restore original text
        document.getElementById("top-text").innerHTML = "Test your mettle.";
    }
}