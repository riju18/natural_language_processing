$(document).ready(function () {
    $("#result").hide();
    $("#words").hide();
    $("#options").hide();
    $("#userInput").keypress(function (e) { 
        if (e.which==13) {
            var getVal = $(this).val();
            $("#result").show();
            $("#words").show();
            $("#options").show();
            var m = new RiString(getVal); //for rita;
            var pos = m.pos();
            var doc = nlp(getVal); //for nlp;
            /*pos name*/
        var v = "verb";
        var n = "noun";
        var d = "determiner";
        var jj = "adjective";
        var In = "preposition";
        /*symbol starts*/
        var stop = "end-of-sentence";
        var comma = "comma";
        var xcla = "exclamatory_sign";
        var gthan = "greater_than";
        var lthan = "lesser_than";
        var que = "question_mark";
        var hyp_neg = "hyphen_or_negetive";
        var uscore = "underscore";
        var oparen = "open_parentheses";
        var cparen = "close_parentheses";
        var okb = "open_karlie_brace";
        var ckb = "close_karlie_brace";
        var osb = "open_square_bracket";
        var csb = "close_square_bracket";
        var plus = "plus";
        var atrate = "at_the_rate_of";
        var hash = "hash";
        var dol_sign = "dollar_sign";
        var percentage = "percentage";
        var pow = "power";
        var str = "star";
        var eql = "equal";
        var se_col = "semicolon";
        var tilde = "tilde";
        /*symbol ends*/
        var cc = "conjunction";
        var cd = "Cardinal-number";
        var ex = "Existential-there";
        var fw = "Foreign-word";
        var md = "modal";
        var pdt = "Predeterminer";
        var psv = "Possessive-ending";
        var prp = "Personal-pronoun";
        var prp$ = "Possessive-pronoun";
        var rb = "Adverb";
        var rbr =  "Adverb_comparative";
        var rbs = "Adverb_superlative";
        var rp = "Particle";
        var sym = "Symbol";
        var to = "to";
        var uh = "Interjection";
        var wdt = "Wh-determiner";
        var wp = "Wh-pronoun";
        var wp$ = "Possessive_wh-pronoun";
        var wrb = "Wh-adverb";
        /*pos name*/
            var emp = "";
            for (var i=0; i<pos.length; i++){
                //emp+=pos[i];
                //$("#pos").html(emp);
                if (pos[i] ==='nn') {
                    emp+=n+" ";
                    $("#pos").html(emp);
                }
                if (pos[i] ==='vbz'|| pos[i] ==='vb'|| pos[i] ==='vbg'|| pos[i] ==='vbd'|| pos[i] ==='vbn'|| pos[i] ==='vbp') {
                    emp+=v+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'dt' ) {
                    emp+=d+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'jj' ) {
                    emp+=jj+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'in' ) {
                    emp+=In+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '.' ) {
                    emp+=stop+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === ',' ) {
                    emp+=comma+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '!' ) {
                    emp+=xcla+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '>' ) {
                    emp+=gthan+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '<' ) {
                    emp+=lthan+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '?' ) {
                    emp+=que+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '-' ) {
                    emp+=hyp_neg+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '_' ) {
                    emp+=uscore+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '+' ) {
                    emp+=plus+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '(' ) {
                    emp+=oparen+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === ')' ) {
                    emp+=cparen+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '{' ) {
                    emp+=okb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '}' ) {
                    emp+=ckb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '[' ) {
                    emp+=osb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === ']' ) {
                    emp+=csb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '@' ) {
                    emp+=atrate+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '#' ) {
                    emp+=hash+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '$' ) {
                    emp+=dol_sign+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '%' ) {
                    emp+=percentage+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '^' ) {
                    emp+=pow+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '*' ) {
                    emp+=str+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '=' ) {
                    emp+=eql+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '~' ) {
                    emp+=tilde+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === ';' ) {
                    emp+=se_col+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'cc' || pos[i] === '&' ) {
                    emp+=cc+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'cd' ) {
                    emp+=cd+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'ex' ) {
                    emp+=ex+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'fw' ) {
                    emp+=fw+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'md' ) {
                    emp+=md+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'pdt' ) {
                    emp+=pdt+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'psv' ) {
                    emp+=psv+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'prp' ) {
                    emp+=prp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'prp$' ) {
                    emp+=prp$+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rb' ) {
                    emp+=rb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rbr' ) {
                    emp+=rbr+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rbs' ) {
                    emp+=rbs+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rp' ) {
                    emp+=rp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'to' ) {
                    emp+=to+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'uh' ) {
                    emp+=uh+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wdt' ) {
                    emp+=wdt+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wp' ) {
                    emp+=wp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wp$' ) {
                    emp+=wp$+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wrb' ) {
                    emp+=wrb+" ";
                    $("#pos").html(emp);
                }
            }

            $("#negate").click(function () {   //negate;
                var sen = doc.sentences().toNegative().out('text');
                $("#pos").html(sen);
                $("#postive").click(function () {   //positive;
                    sen = doc.sentences().toPositive().out('text');
                    $("#pos").html(sen);
                });
            });

            $("#postive").click(function () {   //positive;
                var sen = doc.sentences().toPositive().out('text');
                $("#pos").html(sen);
                $("#negate").click(function () {  //negetive;
                    sen = doc.sentences().toNegative().out('text');
                    $("#pos").html(sen);
                });
            });

            $("#present").click(function () { 
                var sen = doc.sentences().toPresentTense().out('text');
                $("#pos").html(sen);
            });

            $("#future").click(function () { 
                var sen = doc.sentences().toFutureTense().out('text');
                $("#pos").html(sen);
            });

            $("#past").click(function () { 
                var sen = doc.sentences().toPastTense().out('text');
                $("#pos").html(sen);
            });

            /* for lexime */
            var words = m.words();
            $("#lexime").html(words+" ");
            /* for lexime */





            /*var getVal = $(this).val();
            $("#result").show();
            $("#words").show();
            var doc = nlp(getVal);
            var sen = doc.sentences().toNegative().out('text');
            var sen = doc.sentences().isPassive().out('text');
            $("#pos").html(sen);
             //for lexime
            var words = m.words();
            $("#lexime").html(words+" ");
             for lexime */
        }
    });
});