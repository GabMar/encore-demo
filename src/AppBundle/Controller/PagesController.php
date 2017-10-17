<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * PagesController.
 *
 * @author Gabriele Martini <gabriele@elearnsecurity.com>
 */
class PagesController extends Controller
{
    public function pageOneAction()
    {
        return $this->render('AppBundle:Pages:pageone.html.twig');
    }
    
    public function pageTwoAction()
    {
        return $this->render('AppBundle:Pages:pagetwo.html.twig');
    }
}
